import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { InputFile } from 'shared/ui/FormElements/InputFile/ui/InputFile';
import cls from './ProfileHeader.module.scss';

interface Props {
    className?: string;
}

export const ProfileHeader = ({ className }:Props) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ProfileHeader, {}, [className])}>
            <div className={cls.ProfileHeader}>
                <img src="" alt="" />
                <div className={cls.ProfileAvatar}>
                    <img src="" alt="" />
                    <form>
                        {/* <InputFile */}
                        {/*    key="avatar" */}
                        {/*    key="file" */}
                        {/*    name="file" */}
                        {/*    control={methods.control} */}
                        {/*    className={cls.fileInput} */}
                        {/*    register={methods.register} */}
                        {/*    fileName={methods.fileName} */}

                        {/* /> */}
                    </form>
                </div>

            </div>
        </div>
    );
};
