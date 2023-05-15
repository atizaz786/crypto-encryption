import React from 'react';
import { Card } from 'antd';
import ReactMarkdown from 'react-markdown';

const markdown = `
# Using the File Encryption and Decryption Web App

## Introduction

This web application provides an easy-to-use interface for encrypting and decrypting text files using Advanced Encryption Standard (AES) algorithm. This app is particularly useful in the context of protecting your sensitive data from unauthorized access and reducing the risk of ransomware attacks.

## How to use

1. **Encryption**: Navigate to the "Encrypt" tab, click the upload button and select the text file you wish to encrypt. After the encryption process, you will see an encryption key. Make sure to copy and securely store this key as you will need it to decrypt the file later.

2. **Decryption**: Navigate to the "Decrypt" tab, click the upload button to upload the encrypted file, then enter the encryption key in the provided field. Upon clicking the decrypt button, your original file will be restored.

## Why AES?

AES is a symmetric encryption algorithm that is widely recognized and utilized worldwide due to its security and efficiency. AES is robust against all known practical attacks when used properly, and that's why we chose it for our application. 

## Minimizing Ransomware Risk

Encrypting your sensitive data adds an additional layer of security. In the event of a ransomware attack, attackers would not be able to utilize the encrypted data without the encryption key, thus minimizing the potential damage of such attacks. Regularly backing up and encrypting your data can significantly reduce the risk of losing valuable information due to ransomware or other types of cyber-attacks.
`;

const HowToUse = () => {
  return (
    <Card>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </Card>
  );
};

export default HowToUse;
