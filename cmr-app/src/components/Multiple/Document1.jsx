import * as React from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PaidIcon from '@mui/icons-material/Paid';
import { useTranslation } from 'react-i18next';


const Document1 = () => {
    const { t } = useTranslation();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <div>
            <button onClick={handleOpen} className="flex mt-4 hover:scale-105 hover:text-sky-500 duration-100">
            <PaidIcon />
                <p>{t('payment')}</p>
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="w-full sm:w-[600px] absolute shadow-lg bg-white rounded-lg  transform -translate-x-1/2 -translate-y-1/2 bg-opacity-90 py-5 px-5 left-1/2 top-1/2">
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    {t('payment')}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>


                        <p>{t('paymentdetail1')}</p>
                        <br />
                        <p>{t('paymentdetail2')}</p>
                        <br />
                        <p>{t('paymentdetail3')}</p>
                        
                    </Typography>
                </Box>
            </Modal>

           
        </div>
    )
}
export default Document1


