// material icons
import RefreshIcon from '@mui/icons-material/Refresh';

const SubmitButton = ({ enabled, loading, onClick }) => {

    return (
        <>
            {
                enabled ? (

                    <button 
                        className="w-36 h-12 bg-almost-black-100 rounded-lg text-white font-bold shadow-md uppercase transition-all duration-300 hover:shadow-xl" 
                        type="submit"
                        onClick={onClick}
                    >
                        {
                            loading ? (
        
                                <RefreshIcon className="animate-spin"/>
        
                            ) : (
        
                                "Submit"
        
                            )
                        }
                    </button>
        
                ) : (<></>)
            }
        </>
    )

}

export default SubmitButton;