import { Overlay } from "./Modal.styled";

export const Modal = ({src, alt}) => {
    return (
      <Overlay>
        <div>
          <img src={src} alt={alt} />
        </div>
      </Overlay>
    );
}
