"use client";

import React, { useState, useMemo, forwardRef, useImperativeHandle } from "react";
import { twMerge } from "tailwind-merge";
import Files from "./Files";
import { FileUploadProps, acceptTypes } from "./types";
import { Label, Input, Select, Switch } from "..";
import { FaUpload } from "react-icons/fa";

const sizes = {
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
} as const;

// Define what methods we expose via ref
export interface FileUploadRef {
  clear: () => void;
  getFiles: () => FileList | null;
}

const FileUpload = forwardRef<FileUploadRef, FileUploadProps>(
  (
    {
      className = "",
      size = "md",
      accept,
      label = "File Upload",
      icon,
      onChange,
      showMultiple = false,
      multipleLabel = "Multiple",
    },
    ref
  ) => {
    const [files, setLocalFiles] = useState<FileList | null>(null);
    const [multiple, setMultiple] = useState(false);
    const [selectedAcceptType, setSelectedAcceptType] = useState<string>(accept || "*");

    // Expose methods to parent via ref
    useImperativeHandle(ref, () => ({
      clear: () => {
        setLocalFiles(null);
        // Reset the actual <input> element too
        if (inputRef.current) {
          inputRef.current.value = "";
        }
      },
      getFiles: () => files,
    }));

    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleAcceptTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedAceptType(event.target.value);
      setLocalFiles(null);
      if (inputRef.current) inputRef.current.value = "";
    };

    const handleMultipleChange = (checked: boolean) => {
      setMultiple(checked);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = event.target.files;
      if (selectedFiles && selectedFiles.length > 0) {
        setLocalFiles(selectedFiles);
        onChange?.(event);
      }
    };

    const deleteFile = (fileToDelete: File) => {
      if (!files) return;

      const updated = Array.from(files).filter((f) => f !== fileToDelete);
      const dt = new DataTransfer();
      updated.forEach((f) => dt.items.add(f));

      setLocalFiles(dt.files);

      // Update the actual input
      if (inputRef.current) {
        inputRef.current.files = dt.files;
      }
    };

    const sizeClasses = useMemo(() => sizes[size], [size]);

    const GetLabel = () => {
      if (!icon) return label || "Upload File";

      return (
        <>
          <FaUpload aria-hidden="true" className="w-5 h-5" />
          {label ? label : <span className="sr-only">Upload File</span>}
        </>
      );
    };

    return (
      <div
        className={twMerge(`fileupload group overflow-hidden ${sizeClasses}`, className)}
        data-testid="fileupload"
      >
        <div className="flex flex-row flex-wrap gap-4 items-center">
          <Label
            label={<GetLabel />}
            layout="col"
            size={size}
            type="file"
            className="items-center !flex !flex-row !w-auto gap-3 cursor-pointer"
          >
            <Input
              ref={inputRef}
              accept={selectedAcceptType}
              name="file"
              type="file"
              onChange={handleFileChange}
              multiple={multiple}
              size={size}
              className="hidden"
            />
          </Label>

          <div className="flex gap-4 items-center">
            {!accept && (
              <Select
                options={acceptTypes}
                id="acceptType"
                value={selectedAcceptType}
                onChange={handleAcceptTypeChange}
                dropdownSize={size}
                className="border-neutral min-w-32"
                rounded="md"
              />
            )}
            {showMultiple && (
              <Switch
                label={multipleLabel}
                name="multiple"
                checked={multiple}
                onChange={handleMultipleChange}
                shape="circle"
                thin
              />
            )}
          </div>
        </div>

        {files && files.length > 0 && <Files files={Array.from(files)} deleteFile={deleteFile} />}
      </div>
    );
  }
);

FileUpload.displayName = "FileUpload";

export default FileUpload;
