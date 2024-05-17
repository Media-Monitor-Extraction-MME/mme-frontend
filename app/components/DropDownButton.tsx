'use client';
import { Fragment, MouseEvent, useState } from 'react';
import ChevronDownSvg from './ChevronDownSvg';
import ShareSvg from './ShareSvg';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import '@/styles/components/_dropdown-button.scss';
import CustomCheckbox from './CustomCheckbox';

interface DropDownButtonProps {
  menuDirection?: 'left' | 'right';
  content: string;
  contentIcon?: React.ReactNode;
  icon?: React.ReactNode;
  menu: Array<{
    item: string;
    href?: string;
    onClick?: () => void;
  }>;
  checkbox?: boolean;
  isChecked?: boolean;
  classes?: {
    button1?: string;
    button2?: string;
  };
  onClick?: () => void;
  dropDownClick?: () => void;
}
export function DropDownButton(props: DropDownButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuDirection = props.menuDirection || 'right';
  const icon = props.icon || <></>;
  const contentIcon = props.contentIcon || <></>;
  const content = props.content || 'Export';
  const menu = props.menu || [
    { item: 'Account settings', href: '#' },
    { item: 'Support', href: '#' },
    { item: 'License', href: '#' }
  ];
  const checkbox = props.checkbox || false;

  return (
    <Menu as="div" className="dropdown-button">
      <div>
        {checkbox ? (
          <CustomCheckbox
            isChecked={props.isChecked || false}
            handleChange={(checked) => {
              if (props.onClick) {
                props.onClick();
              }
            }}
            content={content}
          />
        ) : (
          <button
            className={props.classes ? props.classes!.button1 : 'px-2 py-2'}
            onClick={() => {
              if (props.onClick) {
                props.onClick();
              }
            }}
          >
            {contentIcon} {content}
          </button>
        )}
        {/* <button>
          {checkbox && <CustomCheckbox />} {contentIcon} {content}
        </button> */}

        <Menu.Button
          className={props.classes ? props.classes!.button2 : 'px-2 py-2'}
          onClick={() => {
            if (props.dropDownClick) {
              props.dropDownClick();
            }
          }}
        >
          {icon}
        </Menu.Button>
      </div>

      <div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-4 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1 flex flex-col">
              {menu.map((item, index) => (
                <Menu.Item key={index}>
                  <a
                    href={item.href || '#'}
                    onClick={(event: MouseEvent) => {
                      if (item.onClick) {
                        event.preventDefault();
                        item.onClick();
                      }
                    }}
                  >
                    {item.item}
                  </a>
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </div>
    </Menu>
  );
}

export default DropDownButton;
