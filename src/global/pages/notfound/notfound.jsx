import './notfound.scss'

export default function Notfound() {
    return (
        <div className="page-notfound">
            <h2 className='forte-font page-notfound__title'>Não encontrei essa página...</h2>
            <h3 className='forte-font page-notfound__hint'>Será que você tem permissão para acessá-la?</h3>
        </div>
    )
}