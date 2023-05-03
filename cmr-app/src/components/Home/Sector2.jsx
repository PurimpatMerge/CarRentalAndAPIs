import IconButton from '@mui/material/IconButton';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { useTranslation } from 'react-i18next';
const Sector2 = () => {
    const { t} = useTranslation();
    return (
        <div className="flex-col flex text-center mt-20">
            <div>
                <p className='text-3xl'>
                {t('contactinformation')}
                </p>
                <p className='text-xl'>
                {t('contactproblem')}
                </p>
            </div>
            <div>
                <IconButton aria-label="delete" size="large">
                    <EmailOutlinedIcon sx={{ fontSize: 40 }} />
                </IconButton>
                <IconButton aria-label="delete" size="large">
                    <SmartphoneOutlinedIcon sx={{ fontSize: 40 }} />
                </IconButton>
                <IconButton aria-label="delete" size="large">
                    <FacebookRoundedIcon sx={{ fontSize: 40 }} />
                </IconButton>
            </div>

        </div>
    )
}
export default Sector2