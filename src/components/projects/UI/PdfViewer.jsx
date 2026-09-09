import React from 'react';
import styles from 'src/assets/styled/projects.module.css';

const PdfViewer = ({pdfUrl}) => {
    return (
        <div className={styles.viewer}>
            <iframe
                src={`${pdfUrl}#toolbar=1&navpanes=0`} 
                width="100%"
                height="100%"
                title="PDF Preview"
                style={{ border: 'none' }}
            />
        </div>
    );
};

export default PdfViewer;