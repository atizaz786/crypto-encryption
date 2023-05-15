import React, { useState } from 'react';
import { Upload, Button, Input, message, Typography } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import AES from 'crypto-js/aes';
import FileSaver from 'file-saver';
import { randomBytes } from 'crypto';

const { Dragger } = Upload;
const { Title } = Typography;

const FileEncryptor = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [key, setKey] = useState('');

  const handleUpload = ({ fileList }) => {
    setSelectedFile(fileList[0].originFileObj);
  };

  const onFileUpload = () => {
    const reader = new FileReader();
    reader.onload = function(event) {
      const text = event.target.result;
      const key = randomBytes(32).toString('hex'); // Generate a 256-bit key
      setKey(key);
      const ciphertext = AES.encrypt(text, key).toString();
      const blob = new Blob([ciphertext], { type: 'text/plain;charset=utf-8' });
      FileSaver.saveAs(blob, 'encrypted.txt');
      message.success("File encrypted successfully!");
    };
    reader.readAsText(selectedFile);
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Title level={2}>Encrypt</Title>
      <Dragger beforeUpload={() => false} onChange={handleUpload} style={{ width: '300px', height: '200px', marginBottom: '20px' }}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
      </Dragger>
      {selectedFile &&   
      <Button  style={{ width: '150px', marginTop: '70px' }} type="primary" onClick={onFileUpload}>Encrypt</Button>
      }
      {key && (
        <Input
          value={key}
          addonBefore="Encryption Key"
          style={{ width: '300px', marginTop: '20px' }}
        />
      )}
    </div>
  );
};

export default FileEncryptor;
