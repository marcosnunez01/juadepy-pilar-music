import './PrimaryButton.css'

function PrimaryButton({ texto, onClick }) {
    return (
        <button className="primary-button" onClick={onClick}>
            {texto}
        </button>
    )
}

export default PrimaryButton