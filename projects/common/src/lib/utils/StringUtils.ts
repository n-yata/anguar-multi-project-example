import messages from '../../assets/json/messages.json';

export class StringUtils {
  private constructor() {}

  static getMessage(text: string) {
    return text + ' world ' + messages.aaa;
  }
}
