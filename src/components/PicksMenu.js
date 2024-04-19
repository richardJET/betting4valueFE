import { Fragment } from "react";
import { Popover, Transition, Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const sports = [
  { name: "Soccer", href: "/soccer" },
  { name: "Football", href: "/football" },
  { name: "Counter-Strike", href: "/cs" },
  { name: "Intl Basketball", href: "/basketball" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Picks() {
  return (
    <>
      <Popover className="relative my-auto">
        <Popover.Button className="hidden lg:inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
          <span>Picks</span>
          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-1/2 px-4">
            <div className="w-56 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
              {sports.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block p-2 hover:text-indigo-600"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
      <Disclosure as="div" className="-mx-3 lg:hidden">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
              Picks
              <ChevronDownIcon
                className={classNames(
                  open ? "rotate-180" : "",
                  "h-5 w-5 flex-none"
                )}
                aria-hidden="true"
              />
            </Disclosure.Button>
            <Disclosure.Panel className="mt-2 space-y-2">
              {sports.map((sport) => (
                <Disclosure.Button
                  key={sport.name}
                  as="a"
                  href={sport.href}
                  className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {sport.name}
                </Disclosure.Button>
              ))}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
