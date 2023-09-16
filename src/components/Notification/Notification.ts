import { notification } from 'antd';

export const openNotification = (message: string, description?: string) => {
    notification.open({
        message,
        duration: 1,
        description
    });
};
