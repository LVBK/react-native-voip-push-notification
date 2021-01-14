declare module "react-native-voip-push-notification" {
  export default class RNVoipPushNotification {
    static get RNVoipPushRemoteNotificationsRegisteredEvent(): string;
    static get RNVoipPushRemoteNotificationReceivedEvent(): string;
    static get RNVoipPushDidLoadWithEvents(): string;
    static registerVoipToken(): void;
    static registerVoipToken(): void;
    static getVoipToken(): Promise<string>;
    static onVoipNotificationCompleted(uuid: string): void;
    static addEventListener(
      type: string,
      handler: (payload?: any) => void
    ): void;
    static removeEventListener(type: string): void;
  }
}
