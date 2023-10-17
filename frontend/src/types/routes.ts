export interface IRoute {
    path: string,
    component: React.FC<any>,
    layout: React.FC<any>
}

export type NotificationType = 'success' | 'info' | 'warning' | 'error';