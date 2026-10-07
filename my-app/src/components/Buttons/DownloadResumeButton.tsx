type Props = {
    content:React.ReactNode;
}
export default function DownloadResumeButton({content}:Props){
    return (
        <button type="button" aria-label="download button" className="flex items-center justify-center gap-x-1 w-full min-[450px]:w-auto text-gray-950 border border-gray-950 py-3 px-5 pointer hover:bg-gray-950 hover:text-gray-50 transition-colors ease-linear duration-200 pointer">
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M8 1v9M4 7l4 4 4-4M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            {content}
        </button>
    )
}