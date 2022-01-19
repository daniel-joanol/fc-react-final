import React from 'react';

const PdfReader = () => {
    return (
        <div className="col-lg-8 col-md-6 col-sm-12">
            <iframe src={require('../../images/Pinguino_CV.pdf')} width="100%" height="100%" id="pdf"></iframe>
        </div>
    );
}

export default PdfReader;
