import pdf from 'html-pdf';
import fs from 'fs';
import ReactMarkdown from 'react-markdown';

const handler = (req, res) => {
    const { markdown } = req.body; 

    // Convert Markdown to HTML using ReactMarkdown
    const html = ReactMarkdown.render(markdown);

    // Generate PDF from HTML
    pdf.create(html).toStream((err, stream) => {

        if (err) {
            console.error(err);
            res.status(500).end();
            return;
        }

        // Set response headers for file download
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename="resume.pdf"');

        // Pipe the PDF stream to the response
        stream.pipe(res);

    });
};