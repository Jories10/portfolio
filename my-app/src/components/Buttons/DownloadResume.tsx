type Props = {
    content:string
}
export default function DownloadResume({content}:Props){
    return (
        <button type="button" aria-label="download button">
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M8 1v9M4 7l4 4 4-4M2 13h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            {content}
        </button>
    )
}