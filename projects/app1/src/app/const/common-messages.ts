import { MessageType } from './message-type';

export const CommonMessages = new Map<string, MessageType>([
  ['ang_0001', { code: 'ang.0001', value: '{0}が未入力です、{1}' }],
  ['ang_0002', { code: 'ang.0002', value: '{0}の桁数がエラーです' }],
]);
