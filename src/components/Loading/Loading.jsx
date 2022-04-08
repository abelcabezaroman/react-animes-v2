import { useContext } from "react";
import { LoadingContext } from "../../contexts/LoadingContext";
import "./Loading.scss";

export default function Loading() {
  const { isLoading } = useContext(LoadingContext);
  return (
    isLoading && (
      <div className="c-loading">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    )
  );
}
