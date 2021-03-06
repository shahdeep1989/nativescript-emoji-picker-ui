import { Property, View} from "@nativescript/core/ui/core/view";
import { EditableTextBase } from "@nativescript/core/ui/editable-text-base/editable-text-base";
import { TextBase } from "@nativescript/core/ui/text-base/text-base";
import { EmojiLabelUI as EmojiLabelDefinition, EmojiPickerUI as EmojiPickerDefinition } from "./emoji-picker-ui";

declare const android: any;

export const textProperty = new Property<EmojiLabelBase, string>({ name: "text", defaultValue: ""});

export abstract class EmojiPickerBase extends EditableTextBase implements EmojiPickerDefinition {
  public static returnPressEvent = "returnPress";
  public nativeElement: any;
  public android: any;
  public emojiPopup;
  public setSecureAndKeyboardType(): void {  }
  public close(): any | string{};
  public togglePopup() {  }
  public _onReturnPress(): void { }
}

export abstract class EmojiLabelBase extends TextBase implements EmojiLabelDefinition {
  public text: string;
  public nativeElement: any;
  public textWrap: boolean;
  public EmojiLabelView;
}

export let com: any;

textProperty.register(EmojiLabelBase);
