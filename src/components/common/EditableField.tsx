import { Check, Edit, X } from "lucide-react";
import { useState } from "react";

interface EditableFieldProps {
  value: string;
  onSave: (newValue: string) => void;
  canEdit: boolean;
  multiline?: boolean;
  className?: string;
}

const EditableField = ({
  value,
  onSave,
  canEdit,
  multiline = false,
  className = "",
}: EditableFieldProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState("");

  const startEdit = () => {
    setTempValue(value);
    setIsEditing(true);
  };

  const saveEdit = () => {
    onSave(tempValue);
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className={`relative ${className}`}>
        {multiline ? (
          <textarea
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            className="min-h-[80px] w-full resize-none rounded-lg bg-gray-800 p-2 pr-20 text-white"
            autoFocus
          />
        ) : (
          <input
            type="text"
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            className="w-full rounded-lg bg-gray-800 p-2 pr-20 text-white"
            autoFocus
          />
        )}
        <div className="absolute top-2 right-2 flex">
          <button
            onClick={cancelEdit}
            className="rounded-l-lg bg-gray-600 p-1.5 text-white hover:bg-gray-500"
          >
            <X size={14} />
          </button>
          <button
            onClick={saveEdit}
            className="rounded-r-lg bg-gray-600 p-1.5 text-white hover:bg-gray-500"
          >
            <Check size={14} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-start gap-2 ${className}`}>
      <p className="flex-1">{value}</p>
      {canEdit && (
        <button
          onClick={startEdit}
          className="rounded-full bg-gray-700 p-1.5 text-white hover:bg-gray-600"
        >
          <Edit size={14} />
        </button>
      )}
    </div>
  );
};

export default EditableField;
