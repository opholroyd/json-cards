import React, {useState} from 'react';
import Modal from 'react-modal';

interface ICardExpandedProps {
    title: string;
    name: string;
    isStarred: boolean;
    imageLink: string;
    alias: string[];
    description: string;
    tags: string;
    abilities: string[];
    neutrality: string;
}

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  Modal.setAppElement('CardExpanded');

const CardExpanded:React.FC<ICardExpandedProps> = (props) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const afterOpenModal = () => null;
    const closeModal = () => setIsOpen(false);

    return (
        <div>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >

            <button onClick={closeModal}>close</button>
            <div>Expanded Card</div>
            <h3>{props.title} {props.name}</h3>
            <img 
                className="image" 
                src={props.imageLink}
                alt="hero"
            />
            <h4>{props.alias}</h4>
            <p>{props.description}</p>
                <p>{props.abilities}</p>
                <p>{props.neutrality}</p>
                <p>{props.tags}</p>
            </Modal>
        </div>

        // <div className={customStyles}>
        //     <div className="card-top-container">
        //         <h3>{props.title} {props.name}</h3>
        //         <img 
        //             className="image" 
        //             src={props.imageLink}
        //             alt="hero"
        //         />
        //     </div>
        //     <div className="card-bottom-container">
        //         <h4>{props.alias}</h4>
        //         <div className="description-container">
        //             <p>{props.description}</p>
        //         </div>
        //         <p>{props.abilities}</p>
        //         <p>{props.neutrality}</p>
        //         <p>{props.tags}</p>
        //     </div>
        // </div>
    )
}

export default CardExpanded
