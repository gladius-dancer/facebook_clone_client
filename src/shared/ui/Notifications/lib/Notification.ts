import { Theme, toast, ToastPosition } from 'react-toastify';

type Props = {
    position: ToastPosition,
    autoClose: number,
    hideProgressBar: boolean,
    closeOnClick: boolean,
    pauseOnHover: boolean,
    draggable: boolean,
    progress: string | undefined,
    theme: Theme,
};

export class Notification {
    properties: Props;

    constructor() {
        this.properties = {
            position: 'top-left',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        };
    }

    showSuccess(message: string) {
        return toast.success(message, this.properties);
    }

    showInfo(message: string) {
        return toast.info(message, this.properties);
    }

    showError(message: string) {
        return toast.error(message, this.properties);
    }
}
