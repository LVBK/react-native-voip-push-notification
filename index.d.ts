declare module "react-native-voip-push-notification" {
  export default interface IRNVoipPushNotification {
    RNVoipPushRemoteNotificationsRegisteredEvent: string;
    RNVoipPushRemoteNotificationReceivedEvent: string;
    RNVoipPushDidLoadWithEvents: string;
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
