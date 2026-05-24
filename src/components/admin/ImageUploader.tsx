import { useRef, useState } from 'react';

interface ImageUploaderProps {
  label: string;
  description: string;
  currentUrl?: string;
  onUpload: (url: string) => void;
}

export function ImageUploader({ label, description, currentUrl, onUpload }: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | undefined>(currentUrl);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFile(file: File) {
    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: 'POST', body: formData,
    });
    const data = await res.json();
    setPreview(data.secure_url);
    onUpload(data.secure_url);
    setUploading(false);
  }

  return (
    <div className="flex flex-col gap-2">
      <div>
        <p className="text-sm font-medium text-neutral-300">{label}</p>
        <p className="text-xs text-neutral-500 mt-0.5">{description}</p>
      </div>
      <div
        onClick={() => !uploading && inputRef.current?.click()}
        className="border-2 border-dashed border-neutral-700 hover:border-neutral-500 rounded-2xl p-6 flex flex-col items-center gap-3 cursor-pointer transition-colors"
      >
        {preview ? (
          <img src={preview} alt={label} className="w-32 h-32 object-cover rounded-xl" />
        ) : (
          <div className="w-32 h-32 bg-neutral-800 rounded-xl flex items-center justify-center">
            <span className="text-neutral-600 text-xs">Sin foto</span>
          </div>
        )}
        <div className="text-center">
          <p className="text-sm font-medium text-neutral-300">
            {uploading ? 'Subiendo imagen...' : preview ? 'Clic para cambiar' : 'Clic para subir foto'}
          </p>
          {!uploading && <p className="text-xs text-neutral-600 mt-0.5">JPG, PNG — desde tu computadora</p>}
        </div>
      </div>
      <input ref={inputRef} type="file" accept="image/*" className="hidden"
        onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} />
    </div>
  );
}
