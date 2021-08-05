import classnames from 'classnames';
import * as React from 'react';
import Notification from 'rmc-notification';

import './index.less';

const SHORT = 3;

interface IToastConfig {
  duration: number;
  mask: boolean;
}

const config: IToastConfig = {
  duration: SHORT,
  mask: true,
};

let messageInstance: any;
let messageNeedHide: boolean;
const prefixCls = 'am-toast';

function getMessageInstance(mask: boolean, callback: (notification: any) => void) {
  (Notification as any).newInstance(
    {
      prefixCls,
      style: {}, // clear rmc-notification default style
      transitionName: 'am-fade',
      className: classnames({
        [`${prefixCls}-mask`]: mask,
        [`${prefixCls}-nomask`]: !mask,
      }),
    },
    (notification: any) => callback && callback(notification),
  );
}

function notice(
  content: React.ReactNode,
  type: string,
  duration = config.duration,
  onClose: (() => void) | undefined | null,
  mask = config.mask,
) {
  messageNeedHide = false;
  getMessageInstance(mask, (notification) => {
    if (!notification) {
      return;
    }

    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }

    if (messageNeedHide) {
      notification.destroy();
      messageNeedHide = false;
      return;
    }

    messageInstance = notification;

    notification.notice({
      duration,
      style: {},
      content: (
        <div className={`${prefixCls}-text`} role="alert" aria-live="assertive">
          <div>{content}</div>
        </div>
      ),
      closable: true,
      onClose() {
        if (onClose) {
          onClose();
        }
        notification.destroy();
        notification = null;
        messageInstance = null;
      },
    });
  });
}

export default {
  SHORT,
  LONG: 8,
  show(content: React.ReactNode, duration?: number, mask?: boolean) {
    return notice(content, 'info', duration, () => {}, mask);
  },
  info(content: React.ReactNode, duration?: number, onClose?: () => void, mask?: boolean) {
    return notice(content, 'info', duration, onClose, mask);
  },
  hide() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    } else {
      messageNeedHide = true;
    }
  },
  config(conf: Partial<IToastConfig> = {}) {
    const { duration = SHORT, mask } = conf;
    config.duration = duration;
    if (mask === false) {
      config.mask = false;
    }
  },
};
