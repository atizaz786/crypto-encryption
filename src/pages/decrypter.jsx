import React, { useState } from 'react';
import { Upload, Button, Input, message, Typography } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';
import FileSaver from 'file-saver';

const { Dragger } = Upload;
const { Title } = Typography;

const FileDecryptor = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [key, setKey] = useState('');

  const handleUpload = ({ fileList }) => {
    setSelectedFile(fileList[0].originFileObj);
  };

  const onKeyChange = (event) => {
    setKey(event.target.value);
  };

  const onFileUpload = () => {
    const reader = new FileReader();
    reader.onload = function(event) {
      const ciphertext = event.target.result;
      const bytes = AES.decrypt(ciphertext, key);
      const plaintext = bytes.toString(Utf8);
      const blob = new Blob([plaintext], { type: 'text/plain;charset=utf-8' });
      FileSaver.saveAs(blob, 'decrypted.txt');
      message.success("File decrypted successfully!");
    };
    reader.readAsText(selectedFile);
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Title level={2}>Decrypt</Title>
      <Dragger beforeUpload={() => false} onChange={handleUpload} style={{ width: '300px', height: '200px', marginBottom: '20px' }}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
      </Dragger>
      <Input
        value={key}
        onChange={onKeyChange}
        addonBefore="Decryption Key"
        style={{ width: '300px', marginBottom: '20px' }}
      />
      <Button type="primary" onClick={onFileUpload}>Decrypt</Button>
    </div>
  );
};

export default FileDecryptor;
