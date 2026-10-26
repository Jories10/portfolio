import * as React from "react";

type ErrorBoundaryProps = {
    children: React.ReactNode;
    fallback?: React.ReactNode;
}

type ErrorBoundaryState = {
    hasError: boolean;
    error?:Error;
}
export default class ErrorBoundary extends React.Component<ErrorBoundaryProps,ErrorBoundaryState>{
    constructor(props:ErrorBoundaryProps){
        super(props);
        this.state = {hasError:false, error:undefined}
    }

    getDerivedStateFromError(error:Error):ErrorBoundaryState{
        return {hasError:true, error};
    }

    componentDidCatch(error:Error, errorInfo:React.ErrorInfo):void{
        console.error("Error caught by Error Boundary", error, errorInfo);
    }

    render(){
        if(this.state.hasError){
            if(this.props.fallback){
                return this.props.fallback;
            }

            return (
                <div>
                    <h2>Something Went wrong!</h2>
                    <p>{this.state.error?.message}</p>
                </div>
            )
        }

        return this.props.children;
    }
}