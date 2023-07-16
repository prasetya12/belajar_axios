import PropTypes from 'prop-types';
export default function Card({ data }) {
    return (
        <>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow cursor-pointer mt-5" href={`/product/${data.id}`}>
                <div className="h-40 flex justify-center" >
                    <img className="h-40 rounded-t-lg" src={data.images} />
                </div>
                <div className="p-4">
                    <div className="">
                        {data.productName}
                    </div>
                    <div className="font-semibold mt-2">
                        {data.price}
                    </div>
                </div>
            </div>
        </>
    )
}

Card.propTypes = {
    data: PropTypes.shape({
        productName: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        images: PropTypes.string.isRequired
    })
}
