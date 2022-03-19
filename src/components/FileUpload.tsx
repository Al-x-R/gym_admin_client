import React, { ReactNode, useRef, FC } from 'react';
import { InputGroup } from '@chakra-ui/react';

type FileUploadProps = {
  accept?: string
  multiple?: boolean
  children?: ReactNode
  setFile: Function;
}

const FileUpload: FC<FileUploadProps> = ({accept, multiple, children, setFile}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => inputRef.current?.click();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  }

  return (
    <InputGroup onClick={handleClick}>
      <input
        type={'file'}
        multiple={multiple || false}
        hidden
        accept={accept}
        ref={inputRef}
        onChange={onChange}
      />
      <>
        {children}
      </>
    </InputGroup>
  );
};

export default FileUpload;