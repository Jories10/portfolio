import { useRef } from "react";

type Props = {
    style?:string,
    content:React.ReactNode,
    url:string
}
export default function DownloadResumeButton({style ,content, url}:Props){
    const downloadResumeRef = useRef(null);

    return (
            <a ref={downloadResumeRef} href={url} download="Jories_Condat_Frontend_React" aria-label="Download Resume"  className={`${style}`}>
                 <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M8 1v9M4 7l4 4 4-4M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>{content}</a>
    )
}