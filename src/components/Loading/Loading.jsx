import "./Loading.scss";

export default function Loading({isLoading}){
    return isLoading && <div className="c-loading"><div className="lds-ripple"><div></div><div></div></div></div>
}