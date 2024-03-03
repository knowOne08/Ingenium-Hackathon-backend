// const { renderToStream } = require('@react-pdf/renderer');
import { Document, Page, View, Text } from '@react-pdf/renderer'
import React from 'react';

// import react from "react"
export const MyPDF: React.FC<{ htmlString: string }> = ({ htmlString }) => {
    return React.createElement(
      Document,
      null,
      React.createElement(
        Page,
        { size: 'A4' },
        React.createElement(
          View,
          null,
          React.createElement(
            Text,
            null,
            htmlString
          )
        )
      )
    );
  };


  