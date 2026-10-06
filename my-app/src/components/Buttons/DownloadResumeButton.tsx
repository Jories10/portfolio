type Props = {
    content:React.ReactNode;
}
export default function DownloadResumeButton({content}:Props){
    return (
        <button type="button" aria-label="download button" className="flex items-center gap-x-1 ">
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M8 1v9M4 7l4 4 4-4M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            {content}
        </button>
    )
}