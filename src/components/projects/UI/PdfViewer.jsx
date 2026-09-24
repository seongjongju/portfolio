import React, { useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import styles from 'src/assets/styled/projects.module.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${ pdfjs.version }/build/pdf.worker.min.mjs`; 

const PdfViewer = ({pdfUrl, download}) => {
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);
    const [scale, setScale] = useState(1.0);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setPageNumber(1);
    };

    //사용자 옵션
    const goToPrevPage = () => setPageNumber((prev) => Math.max(prev - 1, 1));
    const goToNextPage = () => setPageNumber((prev) => Math.min(prev + 1, numPages || 1));
    const zoomIn = () => setScale((prev) => Math.min(prev + 0.2, 3.0));
    const zoomOut = () => setScale((prev) => Math.max(prev - 0.2, 0.5));

    return (
        <div className={styles.viewer}>
            <div className={styles.toolbar}>
                <div className={styles.controls}>
                    <button onClick={goToPrevPage} disabled={pageNumber <= 1}>이전</button>
                    <span>{pageNumber} / {numPages || '-'}</span>
                    <button onClick={goToNextPage} disabled={pageNumber >= numPages}>다음</button>
                </div>

                <div className={styles.controls}>
                    <button onClick={zoomOut}>-</button>
                    <span>{Math.round(scale * 100)}%</span>
                    <button onClick={zoomIn}>+</button>
                    <a href={pdfUrl} download={download} className={styles.downloadLink}>
                        다운로드
                    </a>
                </div>
            </div>
            {/* toolbar */}
            <div className={styles.pdfContent}>
                <Document 
                    error="PDF를 불러올 수 없습니다."
                    loading="PDF를 불러오는 중..."
                    file={pdfUrl}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page 
                        pageNumber={pageNumber}
                        scale={scale} 
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                    />
                </Document>
            </div>
        </div>
    );
};

export default PdfViewer;