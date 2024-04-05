// @refresh reset

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import * as React from 'react';
import { Platform } from 'react-native';
import SFSymbol from 'sweet-sfsymbols';

type IconName = keyof typeof ICON_NAMES;

type IOSProps =
  | { useMaterialIcon: true }
  | ({ useMaterialIcon?: false } & React.ComponentPropsWithoutRef<
      typeof SFSymbol
    >);
type OptionalIOSProps = { useMaterialIcon?: boolean } & Partial<
  React.ComponentPropsWithoutRef<typeof SFSymbol>
>;

type MaterialIconProps =
  | ({ type: 'MaterialCommunityIcons' } & React.ComponentPropsWithoutRef<
      typeof MaterialCommunityIcons
    >)
  | ({ type: 'MaterialIcons' } & React.ComponentPropsWithoutRef<
      typeof MaterialIcons
    >);
type OptionalMaterialIconProps =
  | ({ type?: 'MaterialCommunityIcons' } & Partial<
      React.ComponentPropsWithoutRef<typeof MaterialCommunityIcons>
    >)
  | ({ type?: 'MaterialIcons' } & Partial<
      React.ComponentPropsWithoutRef<typeof MaterialIcons>
    >);

type IconPropsWithOptionalName = {
  name: IconName;
  color: string;
  size?: number;
  ios?: OptionalIOSProps;
  materialIcon?: OptionalMaterialIconProps;
};

type IconPropsWithRequiredName = Omit<
  IconPropsWithOptionalName,
  'name' | 'ios' | 'materialIcon'
> & {
  name?: IconName;
  ios: IOSProps;
  materialIcon: MaterialIconProps;
};

type IconProps = IconPropsWithOptionalName | IconPropsWithRequiredName;

export function Icon({ name, color, size = 27, ios, materialIcon }: IconProps) {
  const { useMaterialIcon, ...sfSymbolProps } = ios ?? {};
  const sharedIcon = name ? ICON_NAMES[name] : null;

  if (Platform.OS !== 'ios' || useMaterialIcon) {
    if (materialIcon?.type === 'MaterialCommunityIcons') {
      return (
        <MaterialCommunityIcons
          name={
            // @ts-expect-error
            materialIcon.name ?? sharedIcon?.ios ? name : sharedIcon?.android
          }
          size={size}
          color={color}
          {...materialIcon}
        />
      );
    }
    if (materialIcon?.type === 'MaterialIcons') {
      return (
        <MaterialIcons
          name={
            // @ts-expect-error
            materialIcon.name ?? sharedIcon?.ios ? name : sharedIcon?.android
          }
          size={size}
          color={color}
          {...materialIcon}
        />
      );
    }
    if (!name) return null;
    const materialProps = materialIcon ?? {};
    return ICON_NAMES[name]?.type === 'MaterialCommunityIcons' ? (
      <MaterialCommunityIcons
        name={
          // @ts-expect-error
          materialIcon?.name ?? sharedIcon?.ios ? name : sharedIcon?.android
        }
        size={size}
        color={color}
        {...materialProps}
      />
    ) : (
      <MaterialIcons
        name={
          // @ts-expect-error
          materialIcon?.name ?? sharedIcon?.ios ? name : sharedIcon?.android
        }
        size={size}
        color={color}
        {...materialProps}
      />
    );
  }
  return (
    <SFSymbol
      size={size}
      scale={'small'}
      name={
        name
          ? ICON_NAMES[name].ios ?? 'questionmark'
          : // ? ICON_NAMES[name].ios ?? ICON_NAMES[name]?.android ?? 'questionmark'
            'questionmark'
      }
      colors={[color]}
      {...sfSymbolProps}
    />
  );
}

export const ICON_NAMES = {
  'tray-arrow-up': {
    ios: 'square.and.arrow.up',
    type: 'MaterialCommunityIcons',
  },
  'arrow-up-box': {
    ios: 'square.and.arrow.up.fill',
    type: 'MaterialCommunityIcons',
  },
  'arrow-up-circle-outline': {
    ios: 'square.and.arrow.up.circle',
    type: 'MaterialCommunityIcons',
  },
  'arrow-up-circle': {
    ios: 'square.and.arrow.up.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  'tray-arrow-down': {
    ios: 'square.and.arrow.down',
    type: 'MaterialCommunityIcons',
  },
  'arrow-down-box': {
    ios: 'square.and.arrow.down.fill',
    type: 'MaterialCommunityIcons',
  },
  'arrow-down-bold-box-outline': {
    ios: 'square.and.arrow.down.on.square',
    type: 'MaterialCommunityIcons',
  },
  'arrow-down-bold-box': {
    ios: 'square.and.arrow.down.on.square.fill',
    type: 'MaterialCommunityIcons',
  },
  'arrow-right-bold-box-outline': {
    ios: 'rectangle.portrait.and.arrow.right',
    type: 'MaterialCommunityIcons',
  },
  'arrow-right-bold-box': {
    ios: 'rectangle.portrait.and.arrow.right.fill',
    type: 'MaterialCommunityIcons',
  },
  pencil: {
    ios: 'pencil',
    type: 'MaterialCommunityIcons',
  },
  'pencil-circle-outline': {
    ios: 'pencil.circle',
    type: 'MaterialCommunityIcons',
  },
  'pencil-circle': {
    ios: 'pencil.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  'pencil-off': {
    ios: 'pencil.slash',
    type: 'MaterialCommunityIcons',
  },
  'progress-pencil': {
    ios: 'pencil.line',
    type: 'MaterialCommunityIcons',
  },
  eraser: {
    ios: 'eraser',
    type: 'MaterialCommunityIcons',
  },
  'eraser-variant': {
    ios: 'eraser.fill',
    type: 'MaterialCommunityIcons',
  },
  'pencil-box-outline': {
    ios: 'square.and.pencil',
    type: 'MaterialCommunityIcons',
  },
  'drive-file-rename-outline': {
    ios: 'rectangle.and.pencil.and.ellipsis',
    type: 'MaterialIcons',
  },
  draw: {
    ios: 'pencil.and.scribble',
    type: 'MaterialCommunityIcons',
  },
  marker: {
    ios: 'highlighter',
    type: 'MaterialCommunityIcons',
  },
  'fountain-pen-tip': {
    ios: 'pencil.tip',
    type: 'MaterialCommunityIcons',
  },
  'pencil-plus-outline': {
    ios: 'pencil.tip.crop.circle.badge.plus',
    type: 'MaterialCommunityIcons',
  },
  'pen-plus': {
    ios: 'pencil.tip.crop.circle.badge.plus.fill',
    type: 'MaterialCommunityIcons',
  },
  'pencil-minus-outline': {
    ios: 'pencil.tip.crop.circle.badge.minus',
    type: 'MaterialCommunityIcons',
  },
  'pen-minus': {
    ios: 'pencil.tip.crop.circle.badge.minus.fill',
    type: 'MaterialCommunityIcons',
  },
  lasso: {
    ios: 'lasso',
    type: 'MaterialCommunityIcons',
  },
  'trash-can-outline': {
    ios: 'trash',
    type: 'MaterialCommunityIcons',
  },
  'trash-can': {
    ios: 'trash.fill',
    type: 'MaterialCommunityIcons',
  },
  'delete-circle-outline': {
    ios: 'trash.circle',
    type: 'MaterialCommunityIcons',
  },
  'delete-circle': {
    ios: 'trash.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  'delete-off-outline': {
    ios: 'trash.slash',
    type: 'MaterialCommunityIcons',
  },
  'delete-off': {
    ios: 'trash.slash.fill',
    type: 'MaterialCommunityIcons',
  },
  'restore-from-trash': {
    ios: 'arrow.up.trash.fill',
    type: 'MaterialIcons',
  },
  'folder-open': {
    ios: 'folder',
    type: 'MaterialIcons',
  },
  //
  folder: {
    ios: 'folder.fill',
    type: 'MaterialCommunityIcons',
  },
  'folder-plus-outline': {
    ios: 'folder.badge.plus',
    type: 'MaterialCommunityIcons',
  },
  'folder-plus': {
    ios: 'folder.fill.badge.plus',
    type: 'MaterialCommunityIcons',
  },
  'folder-remove-outline': {
    ios: 'folder.badge.minus',
    type: 'MaterialCommunityIcons',
  },
  'folder-remove': {
    ios: 'folder.fill.badge.minus',
    type: 'MaterialCommunityIcons',
  },
  'folder-account-outline': {
    ios: 'folder.badge.person.crop',
    type: 'MaterialCommunityIcons',
  },
  'folder-account': {
    ios: 'folder.fill.badge.person.crop',
    type: 'MaterialCommunityIcons',
  },
  'folder-cog-outline': {
    ios: 'folder.badge.gearshape',
    type: 'MaterialCommunityIcons',
  },
  'folder-cog': {
    ios: 'folder.fill.badge.gearshape',
    type: 'MaterialCommunityIcons',
  },
  'send-outline': {
    ios: 'paperplane',
    type: 'MaterialCommunityIcons',
  },
  send: {
    ios: 'paperplane.fill',
    type: 'MaterialCommunityIcons',
  },
  'send-circle-outline': {
    ios: 'paperplane.circle',
    type: 'MaterialCommunityIcons',
  },
  'send-circle': {
    ios: 'paperplane.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  tray: {
    ios: 'tray',
    type: 'MaterialCommunityIcons',
  },
  inbox: {
    ios: 'tray.fill',
    type: 'MaterialCommunityIcons',
  },
  'inbox-full-outline': {
    ios: 'tray.full',
    type: 'MaterialCommunityIcons',
  },
  'inbox-full': {
    ios: 'tray.full.fill',
    type: 'MaterialCommunityIcons',
  },
  'inbox-arrow-up-outline': {
    ios: 'tray.and.arrow.up',
    type: 'MaterialCommunityIcons',
  },
  'inbox-arrow-up': {
    ios: 'tray.and.arrow.up.fill',
    type: 'MaterialCommunityIcons',
  },
  'inbox-arrow-down-outline': {
    ios: 'tray.and.arrow.down',
    type: 'MaterialCommunityIcons',
  },
  'inbox-arrow-down': {
    ios: 'tray.and.arrow.down.fill',
    type: 'MaterialCommunityIcons',
  },
  'inbox-multiple-outline': {
    ios: 'tray.2',
    type: 'MaterialCommunityIcons',
  },
  'inbox-multiple': {
    ios: 'tray.2.fill',
    type: 'MaterialCommunityIcons',
  },
  'database-outline': {
    ios: 'externaldrive',
    type: 'MaterialCommunityIcons',
  },
  database: {
    ios: 'externaldrive.fill',
    type: 'MaterialCommunityIcons',
  },
  'database-plus-outline': {
    ios: 'externaldrive.badge.plus',
    type: 'MaterialCommunityIcons',
  },
  'database-plus': {
    ios: 'externaldrive.fill.badge.plus',
    type: 'MaterialCommunityIcons',
  },
  'database-minus-outline': {
    ios: 'externaldrive.badge.minus',
    type: 'MaterialCommunityIcons',
  },
  'database-minus': {
    ios: 'externaldrive.fill.badge.minus',
    type: 'MaterialCommunityIcons',
  },
  'database-check-outline': {
    ios: 'externaldrive.badge.checkmark',
    type: 'MaterialCommunityIcons',
  },
  'database-check': {
    ios: 'externaldrive.fill.badge.checkmark',
    type: 'MaterialCommunityIcons',
  },
  'database-remove-outline': {
    ios: 'externaldrive.badge.xmark',
    type: 'MaterialCommunityIcons',
  },
  'database-remove': {
    ios: 'externaldrive.fill.badge.xmark',
    type: 'MaterialCommunityIcons',
  },
  'database-alert-outline': {
    ios: 'externaldrive.badge.exclamationmark',
    type: 'MaterialCommunityIcons',
  },
  'database-alert': {
    ios: 'externaldrive.fill.badge.exclamationmark',
    type: 'MaterialCommunityIcons',
  },
  'database-clock-outline': {
    ios: 'externaldrive.badge.timemachine',
    type: 'MaterialCommunityIcons',
  },
  'database-clock': {
    ios: 'externaldrive.fill.badge.timemachine',
    type: 'MaterialCommunityIcons',
  },
  'archive-outline': {
    ios: 'archivebox',
    type: 'MaterialCommunityIcons',
  },
  archive: {
    ios: 'archivebox.fill',
    type: 'MaterialCommunityIcons',
  },
  'archive-remove-outline': {
    ios: 'xmark.bin',
    type: 'MaterialCommunityIcons',
  },
  'archive-remove': {
    ios: 'xmark.bin.fill',
    type: 'MaterialCommunityIcons',
  },
  'archive-arrow-up-outline': {
    ios: 'arrow.up.bin',
    type: 'MaterialCommunityIcons',
  },
  'archive-arrow-up': {
    ios: 'arrow.up.bin.fill',
    type: 'MaterialCommunityIcons',
  },
  'file-document-outline': {
    ios: 'doc',
    type: 'MaterialCommunityIcons',
  },
  'file-document': {
    ios: 'doc.fill',
    type: 'MaterialCommunityIcons',
  },
  'file-plus-outline': {
    ios: 'doc.badge.plus',
    type: 'MaterialCommunityIcons',
  },
  'file-plus': {
    ios: 'doc.fill.badge.plus',
    type: 'MaterialCommunityIcons',
  },
  'file-upload-outline': {
    ios: 'arrow.up.doc',
    type: 'MaterialCommunityIcons',
  },
  'file-upload': {
    ios: 'arrow.up.doc.fill',
    type: 'MaterialCommunityIcons',
  },
  'file-clock-outline': {
    ios: 'doc.badge.clock',
    type: 'MaterialCommunityIcons',
  },
  'file-clock': {
    ios: 'doc.badge.clock.fill',
    type: 'MaterialCommunityIcons',
  },
  'file-cog-outline': {
    ios: 'doc.badge.gearshape',
    type: 'MaterialCommunityIcons',
  },
  'file-cog': {
    ios: 'doc.badge.gearshape.fill',
    type: 'MaterialCommunityIcons',
  },
  'file-lock-outline': {
    ios: 'lock.doc',
    type: 'MaterialCommunityIcons',
  },
  'file-lock': {
    ios: 'lock.doc.fill',
    type: 'MaterialCommunityIcons',
  },
  'file-download-outline': {
    ios: 'arrow.down.doc',
    type: 'MaterialCommunityIcons',
  },
  'file-download': {
    ios: 'arrow.down.doc.fill',
    type: 'MaterialCommunityIcons',
  },
  'file-document-multiple-outline': {
    ios: 'doc.on.doc',
    type: 'MaterialCommunityIcons',
  },
  'file-document-multiple': {
    ios: 'doc.on.doc.fill',
    type: 'MaterialCommunityIcons',
  },
  'file-copy': {
    ios: 'doc.on.clipboard.fill',
    type: 'MaterialIcons',
  },
  'clipboard-outline': {
    ios: 'clipboard',
    type: 'MaterialCommunityIcons',
  },
  clipboard: {
    ios: 'clipboard.fill',
    type: 'MaterialCommunityIcons',
  },
  'clipboard-list-outline': {
    ios: 'list.clipboard',
    type: 'MaterialCommunityIcons',
  },
  'clipboard-list': {
    ios: 'list.clipboard.fill',
    type: 'MaterialCommunityIcons',
  },
  'clipboard-edit-outline': {
    ios: 'pencil.and.list.clipboard',
    type: 'MaterialCommunityIcons',
  },
  'image-text': {
    ios: 'doc.richtext',
    type: 'MaterialCommunityIcons',
  },
  'file-question-outline': {
    ios: 'doc.questionmark',
    type: 'MaterialCommunityIcons',
  },
  'file-question': {
    ios: 'doc.questionmark.fill',
    type: 'MaterialCommunityIcons',
  },
  'card-bulleted-outline': {
    ios: 'list.bullet.rectangle',
    type: 'MaterialCommunityIcons',
  },
  'card-bulleted': {
    ios: 'list.bullet.rectangle.fill',
    type: 'MaterialCommunityIcons',
  },
  'file-search-outline': {
    ios: 'doc.text.magnifyingglass',
    type: 'MaterialCommunityIcons',
  },
  'note-outline': {
    ios: 'note',
    type: 'MaterialCommunityIcons',
  },
  'note-text-outline': {
    ios: 'note.text',
    type: 'MaterialCommunityIcons',
  },
  'calendar-month': {
    ios: 'calendar',
    type: 'MaterialCommunityIcons',
  },
  'calendar-plus': {
    ios: 'calendar.badge.plus',
    type: 'MaterialCommunityIcons',
  },
  'calendar-minus': {
    ios: 'calendar.badge.minus',
    type: 'MaterialCommunityIcons',
  },
  'calendar-clock': {
    ios: 'calendar.badge.clock',
    type: 'MaterialCommunityIcons',
  },
  'calendar-alert': {
    ios: 'calendar.badge.exclamationmark',
    type: 'MaterialCommunityIcons',
  },
  'calendar-check': {
    ios: 'calendar.badge.checkmark',
    type: 'MaterialCommunityIcons',
  },
  'arrow-left-bold-outline': {
    ios: 'arrowshape.left',
    type: 'MaterialCommunityIcons',
  },
  'arrow-left-bold': {
    ios: 'arrowshape.left.fill',
    type: 'MaterialCommunityIcons',
  },
  'arrow-left-bold-circle-outline': {
    ios: 'arrowshape.left.circle',
    type: 'MaterialCommunityIcons',
  },
  'arrow-left-bold-circle': {
    ios: 'arrowshape.left.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  'arrow-right-bold-outline': {
    ios: 'arrowshape.right',
    type: 'MaterialCommunityIcons',
  },
  'arrow-right-bold': {
    ios: 'arrowshape.right.fill',
    type: 'MaterialCommunityIcons',
  },
  'arrow-right-bold-circle-outline': {
    ios: 'arrowshape.right.circle',
    type: 'MaterialCommunityIcons',
  },
  'arrow-right-bold-circle': {
    ios: 'arrowshape.right.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  'arrow-up-bold-outline': {
    ios: 'arrowshape.up',
    type: 'MaterialCommunityIcons',
  },
  'arrow-up-bold': {
    ios: 'arrowshape.up.fill',
    type: 'MaterialCommunityIcons',
  },
  'arrow-up-bold-circle-outline': {
    ios: 'arrowshape.up.circle',
    type: 'MaterialCommunityIcons',
  },
  'arrow-up-bold-circle': {
    ios: 'arrowshape.up.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  'arrow-down-bold-outline': {
    ios: 'arrowshape.down',
    type: 'MaterialCommunityIcons',
  },
  'arrow-down-bold': {
    ios: 'arrowshape.down.fill',
    type: 'MaterialCommunityIcons',
  },
  'arrow-down-bold-circle-outline': {
    ios: 'arrowshape.down.circle',
    type: 'MaterialCommunityIcons',
  },
  'arrow-down-bold-circle': {
    ios: 'arrowshape.down.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  'arrow-left-right-bold-outline': {
    ios: 'arrowshape.left.arrowshape.right',
    type: 'MaterialCommunityIcons',
  },
  'arrow-left-right-bold': {
    ios: 'arrowshape.left.arrowshape.right.fill',
    type: 'MaterialCommunityIcons',
  },
  'arrow-left-top': {
    ios: 'arrowshape.turn.up.left',
    type: 'MaterialCommunityIcons',
  },
  'arrow-left-top-bold': {
    ios: 'arrowshape.turn.up.left.fill',
    type: 'MaterialCommunityIcons',
  },
  'arrow-right-top': {
    ios: 'arrowshape.turn.up.right',
    type: 'MaterialCommunityIcons',
  },
  'arrow-right-top-bold': {
    ios: 'arrowshape.turn.up.right.fill',
    type: 'MaterialCommunityIcons',
  },
  'book-open-outline': {
    ios: 'book',
    type: 'MaterialCommunityIcons',
  },
  'book-open': {
    ios: 'book.fill',
    type: 'MaterialCommunityIcons',
  },
  bookshelf: {
    ios: 'books.vertical.fill',
    type: 'MaterialCommunityIcons',
  },
  'menu-book': {
    ios: 'menucard.fill',
    type: 'MaterialIcons',
  },
  newspaper: {
    ios: 'newspaper',
    type: 'MaterialCommunityIcons',
  },
  'newspaper-variant': {
    ios: 'newspaper.fill',
    type: 'MaterialCommunityIcons',
  },
  'bookmark-outline': {
    ios: 'bookmark',
    type: 'MaterialCommunityIcons',
  },
  bookmark: {
    ios: 'bookmark.fill',
    type: 'MaterialCommunityIcons',
  },
  'bookmark-off-outline': {
    ios: 'bookmark.slash',
    type: 'MaterialCommunityIcons',
  },
  'bookmark-off': {
    ios: 'bookmark.slash.fill',
    type: 'MaterialCommunityIcons',
  },
  'pencil-ruler': {
    ios: 'pencil.and.ruler.fill',
    type: 'MaterialCommunityIcons',
  },
  ruler: {
    ios: 'ruler.fill',
    type: 'MaterialCommunityIcons',
  },
  backpack: {
    ios: 'backpack.fill',
    type: 'MaterialIcons',
  },
  paperclip: {
    ios: 'paperclip',
    type: 'MaterialCommunityIcons',
  },
  link: {
    ios: 'link',
    type: 'MaterialCommunityIcons',
  },
  'link-plus': {
    ios: 'link.badge.plus',
    type: 'MaterialCommunityIcons',
  },
  'vector-link': {
    ios: 'personalhotspot',
    type: 'MaterialCommunityIcons',
  },
  'person-outline': {
    ios: 'person',
    type: 'MaterialIcons',
  },
  person: {
    ios: 'person.fill',
    type: 'MaterialIcons',
  },
  'account-circle-outline': {
    ios: 'person.circle',
    type: 'MaterialCommunityIcons',
  },
  'account-circle': {
    ios: 'person.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  'account-off-outline': {
    ios: 'person.slash',
    type: 'MaterialCommunityIcons',
  },
  'account-off': {
    ios: 'person.slash.fill',
    type: 'MaterialCommunityIcons',
  },
  'account-check': {
    ios: 'person.fill.checkmark',
    type: 'MaterialCommunityIcons',
  },
  'account-remove': {
    ios: 'person.fill.xmark',
    type: 'MaterialCommunityIcons',
  },
  'account-question': {
    ios: 'person.fill.questionmark',
    type: 'MaterialCommunityIcons',
  },
  'account-plus-outline': {
    ios: 'person.badge.plus',
    type: 'MaterialCommunityIcons',
  },
  'account-minus-outline': {
    ios: 'person.badge.minus',
    type: 'MaterialCommunityIcons',
  },
  'account-clock-outline': {
    ios: 'person.badge.clock',
    type: 'MaterialCommunityIcons',
  },
  'account-clock': {
    ios: 'person.badge.clock.fill',
    type: 'MaterialCommunityIcons',
  },
  'account-key-outline': {
    ios: 'person.badge.key',
    type: 'MaterialCommunityIcons',
  },
  'account-key': {
    ios: 'person.badge.key.fill',
    type: 'MaterialCommunityIcons',
  },
  'account-multiple-outline': {
    ios: 'person.2',
    type: 'MaterialCommunityIcons',
  },
  'account-multiple': {
    ios: 'person.2.fill',
    type: 'MaterialCommunityIcons',
  },
  'account-voice': {
    ios: 'person.wave.2.fill',
    type: 'MaterialCommunityIcons',
  },
  'image-frame': {
    ios: 'photo.artframe',
    type: 'MaterialCommunityIcons',
  },
  checkerboard: {
    ios: 'rectangle.checkered',
    type: 'MaterialCommunityIcons',
  },
  accessibility: {
    ios: 'accessibility',
    type: 'MaterialIcons',
  },
  dumbbell: {
    ios: 'dumbbell.fill',
    type: 'MaterialCommunityIcons',
  },
  'soccer-field': {
    ios: 'sportscourt',
    type: 'MaterialCommunityIcons',
  },
  soccer: {
    ios: 'soccerball',
    type: 'MaterialCommunityIcons',
  },
  baseball: {
    ios: 'baseball.fill',
    type: 'MaterialCommunityIcons',
  },
  basketball: {
    ios: 'basketball.fill',
    type: 'MaterialCommunityIcons',
  },
  football: {
    ios: 'football.fill',
    type: 'MaterialCommunityIcons',
  },
  tennis: {
    ios: 'tennis.racket',
    type: 'MaterialCommunityIcons',
  },
  'hockey-puck': {
    ios: 'hockey.puck.fill',
    type: 'MaterialCommunityIcons',
  },
  cricket: {
    ios: 'cricket.ball.fill',
    type: 'MaterialCommunityIcons',
  },
  'tennis-ball': {
    ios: 'tennisball.fill',
    type: 'MaterialCommunityIcons',
  },
  volleyball: {
    ios: 'volleyball.fill',
    type: 'MaterialCommunityIcons',
  },
  skateboard: {
    ios: 'skateboard',
    type: 'MaterialCommunityIcons',
  },
  ski: {
    ios: 'skis',
    type: 'MaterialCommunityIcons',
  },
  surfing: {
    ios: 'surfboard',
    type: 'MaterialCommunityIcons',
  },
  'trophy-outline': {
    ios: 'trophy',
    type: 'MaterialCommunityIcons',
  },
  trophy: {
    ios: 'trophy.fill',
    type: 'MaterialCommunityIcons',
  },
  'medal-outline': {
    ios: 'medal',
    type: 'MaterialCommunityIcons',
  },
  medal: {
    ios: 'medal.fill',
    type: 'MaterialCommunityIcons',
  },
  'apple-keyboard-command': {
    ios: 'command',
    type: 'MaterialCommunityIcons',
  },
  'keyboard-space': {
    ios: 'space',
    type: 'MaterialCommunityIcons',
  },
  'apple-keyboard-option': {
    ios: 'option',
    type: 'MaterialCommunityIcons',
  },
  restart: {
    ios: 'restart',
    type: 'MaterialCommunityIcons',
  },
  sleep: {
    ios: 'zzz',
    type: 'MaterialCommunityIcons',
  },
  power: {
    ios: 'power',
    type: 'MaterialCommunityIcons',
  },
  'power-cycle': {
    ios: 'togglepower',
    type: 'MaterialCommunityIcons',
  },
  'power-on': {
    ios: 'poweron',
    type: 'MaterialCommunityIcons',
  },
  'power-off': {
    ios: 'poweroff',
    type: 'MaterialCommunityIcons',
  },
  'power-sleep': {
    ios: 'powersleep',
    type: 'MaterialCommunityIcons',
  },
  'alpha-x-box-outline': {
    ios: 'clear',
    type: 'MaterialCommunityIcons',
  },
  'alpha-x-box': {
    ios: 'clear.fill',
    type: 'MaterialCommunityIcons',
  },
  'keyboard-backspace': {
    ios: 'delete.left',
    type: 'MaterialCommunityIcons',
  },
  'apple-keyboard-shift': {
    ios: 'shift',
    type: 'MaterialCommunityIcons',
  },
  'apple-keyboard-caps': {
    ios: 'capslock',
    type: 'MaterialCommunityIcons',
  },
  'keyboard-outline': {
    ios: 'keyboard',
    type: 'MaterialCommunityIcons',
  },
  keyboard: {
    ios: 'keyboard.fill',
    type: 'MaterialCommunityIcons',
  },
  'keyboard-settings-outline': {
    ios: 'keyboard.badge.ellipsis',
    type: 'MaterialCommunityIcons',
  },
  'keyboard-settings': {
    ios: 'keyboard.badge.ellipsis.fill',
    type: 'MaterialCommunityIcons',
  },
  web: {
    ios: 'globe',
    type: 'MaterialCommunityIcons',
  },
  'access-point-network': {
    ios: 'network',
    type: 'MaterialCommunityIcons',
  },
  'access-point-network-off': {
    ios: 'network.slash',
    type: 'MaterialCommunityIcons',
  },
  'weather-sunny': {
    ios: 'sun.min',
    type: 'MaterialCommunityIcons',
  },
  'white-balance-sunny': {
    ios: 'sun.max.fill',
    type: 'MaterialCommunityIcons',
  },
  'weather-sunny-alert': {
    ios: 'sun.max.trianglebadge.exclamationmark',
    type: 'MaterialCommunityIcons',
  },
  'weather-night': {
    ios: 'moon.stars',
    type: 'MaterialCommunityIcons',
  },
  'nightlight-round': {
    ios: 'moon.fill',
    type: 'MaterialIcons',
  },
  'star-four-points': {
    ios: 'sparkle',
    type: 'MaterialCommunityIcons',
  },
  'cloud-outline': {
    ios: 'cloud',
    type: 'MaterialCommunityIcons',
  },
  cloud: {
    ios: 'cloud.fill',
    type: 'MaterialCommunityIcons',
  },
  'weather-rainy': {
    ios: 'cloud.rain',
    type: 'MaterialCommunityIcons',
  },
  'weather-lightning': {
    ios: 'cloud.bolt',
    type: 'MaterialCommunityIcons',
  },
  'weather-tornado': {
    ios: 'tornado',
    type: 'MaterialCommunityIcons',
  },
  'sun-thermometer-outline': {
    ios: 'thermometer.sun',
    type: 'MaterialCommunityIcons',
  },
  'sun-thermometer': {
    ios: 'thermometer.sun.fill',
    type: 'MaterialCommunityIcons',
  },
  'water-outline': {
    ios: 'drop',
    type: 'MaterialCommunityIcons',
  },
  water: {
    ios: 'drop.fill',
    type: 'MaterialCommunityIcons',
  },
  'water-circle': {
    ios: 'drop.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  fire: {
    ios: 'flame',
    type: 'MaterialCommunityIcons',
  },
  'fire-circle': {
    ios: 'flame.circle',
    type: 'MaterialCommunityIcons',
  },
  'umbrella-outline': {
    ios: 'umbrella',
    type: 'MaterialCommunityIcons',
  },
  umbrella: {
    ios: 'umbrella.fill',
    type: 'MaterialCommunityIcons',
  },
  'play-outline': {
    ios: 'play',
    type: 'MaterialCommunityIcons',
  },
  play: {
    ios: 'play.fill',
    type: 'MaterialCommunityIcons',
  },
  'play-circle-outline': {
    ios: 'play.circle',
    type: 'MaterialCommunityIcons',
  },
  'play-circle': {
    ios: 'play.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  'play-box-outline': {
    ios: 'play.square',
    type: 'MaterialCommunityIcons',
  },
  'play-box': {
    ios: 'play.square.fill',
    type: 'MaterialCommunityIcons',
  },
  'play-box-multiple-outline': {
    ios: 'play.square.stack',
    type: 'MaterialCommunityIcons',
  },
  'play-box-multiple': {
    ios: 'play.square.stack.fill',
    type: 'MaterialCommunityIcons',
  },
  pause: {
    ios: 'pause',
    type: 'MaterialCommunityIcons',
  },
  'pause-circle-outline': {
    ios: 'pause.circle',
    type: 'MaterialCommunityIcons',
  },
  'pause-circle': {
    ios: 'pause.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  stop: {
    ios: 'stop.fill',
    type: 'MaterialCommunityIcons',
  },
  'stop-circle-outline': {
    ios: 'stop.circle',
    type: 'MaterialCommunityIcons',
  },
  'stop-circle': {
    ios: 'stop.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  'record-circle-outline': {
    ios: 'record.circle',
    type: 'MaterialCommunityIcons',
  },
  'record-circle': {
    ios: 'record.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  'play-pause': {
    ios: 'playpause.fill',
    type: 'MaterialCommunityIcons',
  },
  'rewind-outline': {
    ios: 'backward',
    type: 'MaterialCommunityIcons',
  },
  rewind: {
    ios: 'backward.fill',
    type: 'MaterialCommunityIcons',
  },
  'fast-forward-outline': {
    ios: 'forward',
    type: 'MaterialCommunityIcons',
  },
  'fast-forward': {
    ios: 'forward.fill',
    type: 'MaterialCommunityIcons',
  },
  'skip-backward-outline': {
    ios: 'backward.end',
    type: 'MaterialCommunityIcons',
  },
  'skip-backward': {
    ios: 'backward.end.fill',
    type: 'MaterialCommunityIcons',
  },
  'skip-forward-outline': {
    ios: 'forward.end',
    type: 'MaterialCommunityIcons',
  },
  'skip-forward': {
    ios: 'forward.end.fill',
    type: 'MaterialCommunityIcons',
  },
  'step-backward': {
    ios: 'backward.frame.fill',
    type: 'MaterialCommunityIcons',
  },
  'step-forward': {
    ios: 'forward.frame.fill',
    type: 'MaterialCommunityIcons',
  },
  shuffle: {
    ios: 'shuffle',
    type: 'MaterialCommunityIcons',
  },
  repeat: {
    ios: 'repeat',
    type: 'MaterialCommunityIcons',
  },
  'repeat-once': {
    ios: 'repeat.1',
    type: 'MaterialCommunityIcons',
  },
  infinity: {
    ios: 'infinity',
    type: 'MaterialCommunityIcons',
  },
  'bullhorn-outline': {
    ios: 'megaphone',
    type: 'MaterialCommunityIcons',
  },
  bullhorn: {
    ios: 'megaphone.fill',
    type: 'MaterialCommunityIcons',
  },
  'volume-low': {
    ios: 'speaker.fill',
    type: 'MaterialCommunityIcons',
  },
  'volume-plus': {
    ios: 'speaker.plus.fill',
    type: 'MaterialCommunityIcons',
  },
  'volume-minus': {
    ios: 'speaker.minus.fill',
    type: 'MaterialCommunityIcons',
  },
  'volume-variant-off': {
    ios: 'speaker.slash.fill',
    type: 'MaterialCommunityIcons',
  },
  'volume-medium': {
    ios: 'speaker.wave.1.fill',
    type: 'MaterialCommunityIcons',
  },
  'volume-high': {
    ios: 'speaker.wave.3.fill',
    type: 'MaterialCommunityIcons',
  },
  'music-note': {
    ios: 'music.note',
    type: 'MaterialCommunityIcons',
  },
  'playlist-music': {
    ios: 'music.note.list',
    type: 'MaterialCommunityIcons',
  },
  'microphone-variant': {
    ios: 'music.mic',
    type: 'MaterialCommunityIcons',
  },
  magnify: {
    ios: 'magnifyingglass',
    type: 'MaterialCommunityIcons',
  },
  'magnify-minus-outline': {
    ios: 'minus.magnifyingglass',
    type: 'MaterialCommunityIcons',
  },
  'magnify-plus-outline': {
    ios: 'plus.magnifyingglass',
    type: 'MaterialCommunityIcons',
  },
  'microphone-outline': {
    ios: 'mic',
    type: 'MaterialCommunityIcons',
  },
  microphone: {
    ios: 'mic.fill',
    type: 'MaterialCommunityIcons',
  },
  'microphone-off': {
    ios: 'mic.slash.fill',
    type: 'MaterialCommunityIcons',
  },
  'microphone-plus': {
    ios: 'mic.fill.badge.plus',
    type: 'MaterialCommunityIcons',
  },
  'circle-outline': {
    ios: 'circle',
    type: 'MaterialCommunityIcons',
  },
  circle: {
    ios: 'circle.fill',
    type: 'MaterialCommunityIcons',
  },
  cancel: {
    ios: 'circle.slash',
    type: 'MaterialCommunityIcons',
  },
  target: {
    ios: 'target',
    type: 'MaterialCommunityIcons',
  },
  'square-outline': {
    ios: 'square',
    type: 'MaterialCommunityIcons',
  },
  square: {
    ios: 'square.fill',
    type: 'MaterialCommunityIcons',
  },
  'star-box-multiple-outline': {
    ios: 'star.square.on.square',
    type: 'MaterialCommunityIcons',
  },
  'star-box-multiple': {
    ios: 'star.square.on.square.fill',
    type: 'MaterialCommunityIcons',
  },
  'plus-box-outline': {
    ios: 'plus.app',
    type: 'MaterialCommunityIcons',
  },
  'plus-box': {
    ios: 'plus.app.fill',
    type: 'MaterialCommunityIcons',
  },
  'checkbox-blank-badge-outline': {
    ios: 'app.badge',
    type: 'MaterialCommunityIcons',
  },
  'checkbox-blank-badge': {
    ios: 'app.badge.fill',
    type: 'MaterialCommunityIcons',
  },
  'check-decagram-outline': {
    ios: 'checkmark.seal',
    type: 'MaterialCommunityIcons',
  },
  'check-decagram': {
    ios: 'checkmark.seal.fill',
    type: 'MaterialCommunityIcons',
  },
  'heart-outline': {
    ios: 'heart',
    type: 'MaterialCommunityIcons',
  },
  heart: {
    ios: 'heart.fill',
    type: 'MaterialCommunityIcons',
  },
  'heart-flash': {
    ios: 'bolt.heart.fill',
    type: 'MaterialCommunityIcons',
  },
  'star-outline': {
    ios: 'star',
    type: 'MaterialCommunityIcons',
  },
  star: {
    ios: 'star.fill',
    type: 'MaterialCommunityIcons',
  },
  'shield-outline': {
    ios: 'shield',
    type: 'MaterialCommunityIcons',
  },
  shield: {
    ios: 'shield.fill',
    type: 'MaterialCommunityIcons',
  },
  'flag-outline': {
    ios: 'flag',
    type: 'MaterialCommunityIcons',
  },
  flag: {
    ios: 'flag.fill',
    type: 'MaterialCommunityIcons',
  },
  'bell-outline': {
    ios: 'bell',
    type: 'MaterialCommunityIcons',
  },
  bell: {
    ios: 'bell.fill',
    type: 'MaterialCommunityIcons',
  },
  'tag-outline': {
    ios: 'tag',
    type: 'MaterialCommunityIcons',
  },
  tag: {
    ios: 'tag.fill',
    type: 'MaterialCommunityIcons',
  },
  'lightning-bolt-outline': {
    ios: 'bolt',
    type: 'MaterialCommunityIcons',
  },
  'lightning-bolt': {
    ios: 'bolt.fill',
    type: 'MaterialCommunityIcons',
  },
  'square-root': {
    ios: 'x.squareroot',
    type: 'MaterialCommunityIcons',
  },
  flashlight: {
    ios: 'flashlight.on.fill',
    type: 'MaterialCommunityIcons',
  },
  'flashlight-off': {
    ios: 'flashlight.off.fill',
    type: 'MaterialCommunityIcons',
  },
  'camera-outline': {
    ios: 'camera',
    type: 'MaterialCommunityIcons',
  },
  camera: {
    ios: 'camera.fill',
    type: 'MaterialCommunityIcons',
  },
  'message-outline': {
    ios: 'message',
    type: 'MaterialCommunityIcons',
  },
  message: {
    ios: 'message.fill',
    type: 'MaterialCommunityIcons',
  },
  'message-plus-outline': {
    ios: 'plus.message',
    type: 'MaterialCommunityIcons',
  },
  'message-plus': {
    ios: 'plus.message.fill',
    type: 'MaterialCommunityIcons',
  },
  'message-processing-outline': {
    ios: 'ellipsis.message',
    type: 'MaterialCommunityIcons',
  },
  'message-processing': {
    ios: 'ellipsis.message.fill',
    type: 'MaterialCommunityIcons',
  },
  'format-quote-open': {
    ios: 'quote.opening',
    type: 'MaterialCommunityIcons',
  },
  'format-quote-close': {
    ios: 'quote.closing',
    type: 'MaterialCommunityIcons',
  },
  'comment-quote-outline': {
    ios: 'quote.bubble',
    type: 'MaterialCommunityIcons',
  },
  'comment-quote': {
    ios: 'quote.bubble.fill',
    type: 'MaterialCommunityIcons',
  },
  'message-star-outline': {
    ios: 'star.bubble',
    type: 'MaterialCommunityIcons',
  },
  'message-star': {
    ios: 'star.bubble.fill',
    type: 'MaterialCommunityIcons',
  },
  'message-question-outline': {
    ios: 'questionmark.bubble',
    type: 'MaterialCommunityIcons',
  },
  'message-question': {
    ios: 'questionmark.bubble.fill',
    type: 'MaterialCommunityIcons',
  },
  'phone-outline': {
    ios: 'phone',
    type: 'MaterialCommunityIcons',
  },
  phone: {
    ios: 'phone.fill',
    type: 'MaterialCommunityIcons',
  },
  'phone-plus-outline': {
    ios: 'phone.badge.plus',
    type: 'MaterialCommunityIcons',
  },
  'phone-plus': {
    ios: 'phone.fill.badge.plus',
    type: 'MaterialCommunityIcons',
  },
  'phone-check-outline': {
    ios: 'phone.badge.checkmark',
    type: 'MaterialCommunityIcons',
  },
  'phone-check': {
    ios: 'phone.fill.badge.checkmark',
    type: 'MaterialCommunityIcons',
  },
  'video-outline': {
    ios: 'video',
    type: 'MaterialCommunityIcons',
  },
  video: {
    ios: 'video.fill',
    type: 'MaterialCommunityIcons',
  },
  'email-outline': {
    ios: 'envelope',
    type: 'MaterialCommunityIcons',
  },
  email: {
    ios: 'envelope.fill',
    type: 'MaterialCommunityIcons',
  },
  'email-open': {
    ios: 'envelope.open.fill',
    type: 'MaterialCommunityIcons',
  },
  'cog-outline': {
    ios: 'gearshape',
    type: 'MaterialCommunityIcons',
  },
  cog: {
    ios: 'gearshape.fill',
    type: 'MaterialCommunityIcons',
  },
  'signature-freehand': {
    ios: 'signature',
    type: 'MaterialCommunityIcons',
  },
  'dots-horizontal': {
    ios: 'ellipsis',
    type: 'MaterialCommunityIcons',
  },
  'dots-horizontal-circle-outline': {
    ios: 'ellipsis.circle',
    type: 'MaterialCommunityIcons',
  },
  'dots-horizontal-circle': {
    ios: 'ellipsis.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  'shopping-outline': {
    ios: 'bag',
    type: 'MaterialCommunityIcons',
  },
  shopping: {
    ios: 'bag.fill',
    type: 'MaterialCommunityIcons',
  },
  'cart-outline': {
    ios: 'cart',
    type: 'MaterialCommunityIcons',
  },
  cart: {
    ios: 'cart.fill',
    type: 'MaterialCommunityIcons',
  },
  'basket-outline': {
    ios: 'basket',
    type: 'MaterialCommunityIcons',
  },
  basket: {
    ios: 'basket.fill',
    type: 'MaterialCommunityIcons',
  },
} as const;

// console.log(Object.keys(ICON_NAMES).length); // 354

export type NamesLeft =
  | 'creditcard'
  | 'creditcard.fill'
  | 'giftcard'
  | 'giftcard.fill'
  | 'wallet.pass'
  | 'wallet.pass.fill'
  | 'crop'
  | 'crop.rotate'
  | 'rectangle.portrait.rotate'
  | 'rectangle.landscape.rotate'
  | 'tuningfork'
  | 'paintbrush'
  | 'paintbrush.fill'
  | 'level'
  | 'wrench.adjustable'
  | 'wrench.adjustable.fill'
  | 'hammer'
  | 'hammer.fill'
  | 'screwdriver'
  | 'screwdriver.fill'
  | 'eyedropper'
  | 'eyedropper.full'
  | 'wrench.and.screwdriver'
  | 'wrench.and.screwdriver.fill'
  | 'scroll'
  | 'scroll.fill'
  | 'printer'
  | 'printer.fill'
  | 'scanner'
  | 'scanner.fill'
  | 'theatermasks'
  | 'theatermasks.fill'
  | 'puzzlepiece'
  | 'puzzlepiece.fill'
  | 'house'
  | 'house.fill'
  | 'house.circle'
  | 'house.circle.fill'
  | 'storefront'
  | 'storefront.fill'
  | 'lightbulb'
  | 'lightbulb.fill'
  | 'lightbulb.circle'
  | 'lightbulb.circle.fill'
  | 'lightbulb.slash'
  | 'lightbulb.slash.fill'
  | 'lightswitch.on'
  | 'lightswitch.on.fill'
  | 'lightswitch.off'
  | 'lightswitch.off.fill'
  | 'poweroutlet.type.b'
  | 'powerplug'
  | 'powerplug.fill'
  | 'powercord'
  | 'powercord.fill'
  | 'web.camera'
  | 'web.camera.fill'
  | 'spigot.fill'
  | 'sensor'
  | 'sensor.fill'
  | 'wifi.router'
  | 'wifi.router.fill'
  | 'party.popper'
  | 'party.popper.fill'
  | 'balloon'
  | 'balloon.fill'
  | 'balloon.2'
  | 'balloon.2.fill'
  | 'fireworks'
  | 'building'
  | 'building.fill'
  | 'building.2'
  | 'building.2.fill'
  | 'lock'
  | 'lock.fill'
  | 'lock.circle'
  | 'lock.circle.fill'
  | 'lock.square'
  | 'lock.square.fill'
  | 'lock.circle.dotted'
  | 'lock.square.stack'
  | 'lock.square.stack.fill'
  | 'lock.shield'
  | 'lock.shield.fill'
  | 'lock.slash'
  | 'lock.slash.fill'
  | 'exclamationmark.lock'
  | 'exclamationmark.lock.fill'
  | 'lock.badge.clock'
  | 'lock.badge.clock.fill'
  | 'lock.open'
  | 'lock.open.fill'
  | 'lock.open.trianglebadge.exclamationmark'
  | 'lock.open.trianglebadge.exclamationmark.fill'
  | 'lock.rotation'
  | 'lock.open.rotation'
  | 'key'
  | 'key.fill'
  | 'key.slash'
  | 'key.slash.fill'
  | 'questionmark.key.filled'
  | 'wifi'
  | 'wifi.circle'
  | 'wifi.circle.fill'
  | 'wifi.slash'
  | 'wifi.exclamationmark'
  | 'wifi.exclamationmark.circle'
  | 'wifi.exclamationmark.circle.fill'
  | 'pin'
  | 'pin.fill'
  | 'pin.circle'
  | 'pin.circle.fill'
  | 'pin.square'
  | 'pin.square.fill'
  | 'pin.slash'
  | 'pin.slash.fill'
  | 'mappin'
  | 'mappin.circle'
  | 'mappin.circle.fill'
  | 'mappin.square'
  | 'mappin.square.fill'
  | 'mappin.slash'
  | 'mappin.slash.circle'
  | 'mappin.slash.circle.fill'
  | 'mappin.and.ellipse'
  | 'mappin.and.ellipse.circle'
  | 'mappin.and.ellipse.circle.fill'
  | 'map'
  | 'map.fill'
  | 'map.circle'
  | 'map.circle.fill'
  | 'move.3d'
  | 'scale.3d'
  | 'rotate.3d'
  | 'rotate.3d.fill'
  | 'rotate.3d.circle'
  | 'rotate.3d.circle.fill'
  | 'rotate.left'
  | 'rotate.left.fill'
  | 'rotate.right'
  | 'rotate.right.fill'
  | 'display' // monitor
  | 'play.display'
  | 'lock.display'
  | 'lock.open.display'
  | 'display.and.arrow.down'
  | 'dot.scope.display'
  | 'display.trianglebadge.exclamationmark'
  | 'display.2'
  | 'server.rack'
  | 'laptopcomputer'
  | 'laptopcomputer.slash'
  | 'play.laptopcomputer'
  | 'lock.laptopcomputer'
  | 'lock.open.laptopcomputer'
  | 'laptopcomputer.and.arrow.down'
  | 'laptopcomputer.trianglebadge.exclamationmark'
  | 'dot.scope.laptopcomputer'
  | 'smartphone'
  | 'viewfinder.rectangular'
  | 'headphones'
  | 'headphones.circle'
  | 'headphones.circle.fill'
  | 'earbuds'
  | 'earbuds.case'
  | 'earbuds.case.fill'
  | 'play.tv'
  | 'play.tv.fill'
  | 'photo.tv'
  | 'tv.badge.wifi'
  | 'tv.badge.wifi.fill'
  | 'tv.and.hifispeaker.fill'
  | 'tv.and.mediabox'
  | 'tv.and.mediabox.fill'
  | 'horn'
  | 'horn.fill'
  | 'horn.blast'
  | 'horn.blast.fill'
  | 'bandage'
  | 'bandage.fill'
  | 'crown'
  | 'crown.fill'
  | 'film'
  | 'film.fill'
  | 'film.circle'
  | 'film.circle.fill'
  | 'film.stack'
  | 'film.stack.fill'
  | 'movieclapper'
  | 'movieclapper.fill'
  | 'ticket'
  | 'ticket.fill'
  | 'eye'
  | 'eye.fill'
  | 'eye.circle'
  | 'eye.circle.fill'
  | 'eye.square'
  | 'eye.square.fill'
  | 'eye.slash'
  | 'eye.slash.fill'
  | 'eye.slash.circle'
  | 'eye.slash.circle.fill'
  | 'eyes'
  | 'brain'
  | 'brain.fill'
  | 'ear'
  | 'ear.fill'
  | 'ear.badge.checkmark'
  | 'ear.trianglebadge.exclamationmark'
  | 'qrcode'
  | 'barcode'
  | 'photo'
  | 'photo.fill'
  | 'photo.circle'
  | 'photo.circle.fill'
  | 'photo.badge.plus'
  | 'photo.badge.plus.fill'
  | 'photo.badge.arrow.down'
  | 'photo.badge.arrow.down.fill'
  | 'photo.badge.checkmark'
  | 'photo.badge.checkmark.fill'
  | 'photo.stack'
  | 'photo.stack.fill'
  | 'scope'
  | 'dot.scope'
  | 'clock'
  | 'clock.fill'
  | 'clock.circle'
  | 'clock.circle.fill'
  | 'clock.badge'
  | 'clock.badge.fill'
  | 'clock.badge.checkmark'
  | 'clock.badge.checkmark.fill'
  | 'clock.badge.xmark'
  | 'clock.badge.xmark.fill'
  | 'clock.badge.questionmark'
  | 'clock.badge.questionmark.fill'
  | 'clock.badge.exclamationmark'
  | 'clock.badge.exclamationmark.fill'
  | 'alarm'
  | 'alarm.fill'
  | 'alarm.waves.left.and.right'
  | 'alarm.waves.left.and.right.fill'
  | 'stopwatch'
  | 'stopwatch.fill'
  | 'chart.xyaxis.line'
  | 'timer'
  | 'timer.circle'
  | 'timer.circle.fill'
  | 'timer.square'
  | 'arrow.circlepath'
  | 'clock.arrow.circlepath'
  | 'exclamationmark.arrow.circlepath'
  | 'clock.arrow.2.circlepath'
  | 'gamecontroller'
  | 'gamecontroller.fill'
  | 'playstation.logo'
  | 'xbox.logo'
  | 'paintpalette'
  | 'paintpalette.fill'
  | 'swatchpalette'
  | 'swatchpalette.fill'
  | 'fork.knife'
  | 'chart.bar'
  | 'chart.bar.fill'
  | 'cellularbars'
  | 'chart.pie'
  | 'chart.pie.fill'
  | 'chart.bar.xaxis'
  | 'chart.bar.xaxis.ascending'
  | 'chart.bar.xaxis.ascending.badge.clock'
  | 'chart.line.uptrend.xyaxis'
  | 'chart.line.uptrend.xyaxis.circle'
  | 'chart.line.uptrend.xyaxis.circle.fill'
  | 'chart.line.downtrend.xyaxis'
  | 'chart.line.downtrend.xyaxis.circle'
  | 'chart.line.downtrend.xyaxis.circle.fill'
  | 'chart.line.flattrend.xyaxis'
  | 'chart.line.flattrend.xyaxis.circle'
  | 'chart.line.flattrend.xyaxis.circle.fill'
  | 'chart.dots.scatter'
  | 'dot.squareshape.split.2x2'
  | 'squareshape.dotted.split.2x2'
  | 'squareshape.split.2x2.dotted'
  | 'squareshape.split.2x2'
  | 'squareshape.split.3x3'
  | 'sdcard'
  | 'sdcard.fill'
  | 'atom'
  | 'angle'
  | 'compass.drawing'
  | 'globe.desk'
  | 'globe.desk.fill'
  | 'fossil.shell'
  | 'fossil.shell.fill'
  | 'gift'
  | 'gift.fill'
  | 'gift.circle'
  | 'gift.circle.fill'
  | 'banknote'
  | 'banknote.fill'
  | 'grid'
  | 'checklist.unchecked'
  | 'checklist'
  | 'checklist.checked'
  | 'list.bullet'
  | 'list.bullet.circle'
  | 'list.dash'
  | 'list.triangle'
  | 'list.bullet.indent'
  | 'list.number'
  | 'list.star'
  | 'line.3.horizontal' // reorder-horizontal
  | 'bold'
  | 'italic'
  | 'underline'
  | 'strikethrough'
  | 'shadow'
  | 'bold.italic.underline'
  | 'bold.underline'
  | 'percent'
  | 'info'
  | 'info.circle'
  | 'info.circle.fill'
  | 'info.square'
  | 'info.square.fill'
  | 'at'
  | 'questionmark'
  | 'exclamationmark'
  | 'plus'
  | 'minus'
  | 'plusminus'
  | 'plusminus.circle'
  | 'plusminus.circle.fill'
  | 'multiply'
  | 'multiply.circle'
  | 'multiply.circle.fill'
  | 'multiply.square'
  | 'multiply.square.fill'
  | 'divide'
  | 'divide.circle'
  | 'divide.circle.fill'
  | 'divide.square'
  | 'divide.square.fill'
  | 'equal'
  | 'equal.circle'
  | 'equal.circle.fill'
  | 'equal.square'
  | 'equal.square.fill'
  | 'lessthan'
  | 'lessthan.circle'
  | 'lessthan.circle.fill'
  | 'lessthan.square'
  | 'lessthan.square.fill'
  | 'greaterthan'
  | 'greaterthan.circle'
  | 'greaterthan.circle.fill'
  | 'greaterthan.square'
  | 'greaterthan.square.fill'
  | 'chevron.left.forwardslash.chevron.right'
  | 'parentheses'
  | 'curlybraces'
  | 'curlybraces.square'
  | 'curlybraces.square.fill'
  | 'ellipsis.curlybraces'
  | 'number'
  | 'xmark'
  | 'xmark.circle' // highlight-remove
  | 'xmark.circle.fill'
  | 'xmark.square'
  | 'xmark.square.fill'
  | 'xmark.rectangle'
  | 'xmark.rectangle.fill'
  | 'xmark.rectangle.portrait'
  | 'xmark.rectangle.portrait.fill'
  | 'xmark.diamond'
  | 'xmark.diamond.fill'
  | 'xmark.shield'
  | 'xmark.shield.fill'
  | 'xmark.octagon'
  | 'xmark.octagon.fill'
  | 'checkmark'
  | 'checkmark.circle'
  | 'checkmark.circle.fill'
  | 'checkmark.circle.badge.questionmark'
  | 'checkmark.circle.badge.questionmark.fill'
  | 'checkmark.circle.badge.xmark'
  | 'checkmark.circle.badge.xmark.fill'
  | 'checkmark.circle.trianglebadge.exclamationmark'
  | 'checkmark.square'
  | 'checkmark.square.fill'
  | 'checkmark.rectangle'
  | 'checkmark.rectangle.fill'
  | 'checkmark.rectangle.portrait'
  | 'checkmark.rectangle.portrait.fill'
  | 'checkmark.diamond'
  | 'checkmark.diamond.fill'
  | 'checkmark.shield'
  | 'checkmark.shield.fill'
  | 'chevron.left'
  | 'chevron.left.circle'
  | 'chevron.left.circle.fill'
  | 'chevron.left.square'
  | 'chevron.left.square.fill'
  | 'chevron.backward'
  | 'chevron.backward.circle'
  | 'chevron.backward.circle.fill'
  | 'chevron.backward.square'
  | 'chevron.backward.square.fill'
  | 'chevron.right'
  | 'chevron.right.circle'
  | 'chevron.right.circle.fill'
  | 'chevron.right.square'
  | 'chevron.right.square.fill'
  | 'chevron.forward'
  | 'chevron.forward.circle'
  | 'chevron.forward.circle.fill'
  | 'chevron.forward.square'
  | 'chevron.forward.square.fill'
  | 'chevron.left.2'
  | 'chevron.backward.2'
  | 'chevron.right.2'
  | 'chevron.forward.2'
  | 'chevron.up'
  | 'chevron.up.circle'
  | 'chevron.up.circle.fill'
  | 'chevron.up.square'
  | 'chevron.up.square.fill'
  | 'chevron.down'
  | 'chevron.down.circle'
  | 'chevron.down.circle.fill'
  | 'chevron.down.square'
  | 'chevron.down.square.fill'
  | 'chevron.up.chevron.down'
  | 'chevron.compact.up'
  | 'chevron.compact.down'
  | 'chevron.compact.left'
  | 'chevron.compact.right'
  | 'arrow.left'
  | 'arrow.left.circle'
  | 'arrow.left.circle.fill'
  | 'arrow.left.square'
  | 'arrow.left.square.fill'
  | 'arrow.right'
  | 'arrow.right.circle'
  | 'arrow.right.circle.fill'
  | 'arrow.right.square'
  | 'arrow.right.square.fill'
  | 'arrow.up'
  | 'arrow.up.circle'
  | 'arrow.up.circle.fill'
  | 'arrow.up.square'
  | 'arrow.up.square.fill'
  | 'arrow.up.circle.badge.clock'
  | 'arrow.down'
  | 'arrow.down.circle'
  | 'arrow.down.circle.fill'
  | 'arrow.down.circle.dotted'
  | 'arrow.down.square'
  | 'arrow.down.square.fill'
  | 'asterisk'
  | 'asterisk.circle'
  | 'asterisk.circle.fill'
  | 'dollarsign'
  | 'apple.logo';

type IosNames = (typeof ICON_NAMES)[keyof typeof ICON_NAMES]['ios'];
type MaterialIconNames = keyof typeof ICON_NAMES;
type IconNamesForMaterialIcons = typeof ICON_NAMES;
type IconNamesFromIos = Record<
  IosNames,
  {
    type: 'MaterialIcons' | 'MaterialCommunityIcons';
    android: MaterialIconNames;
  }
>;

// Create other object maybe component to use either iOS or Material icon names since they share some same names
// const IOS_ICON_NAMES = {}
// for (const key in IOS_ICON_NAMES) {
//   const subObject = ICON_NAMES[key as MaterialIconNames];
//   ICON_NAMES[subObject.ios as IosNames] = {
//     ...subObject.default,
//     name: key as MaterialIconNames,
//   };
// }

// console.log(Object.keys(ICON_NAMES));
