import React from 'react';
import s from './Sidebar.module.css';

import logo from '../../images/logo.svg';
import dashboard from '../../images/sidebar/dashboard.svg';
import dashboardActive from '../../images/sidebar/dashboard-active.svg';
import transactions from '../../images/sidebar/transactions.svg';
import transactionsActive from '../../images/sidebar/transactions-active.svg';
import accounts from '../../images/sidebar/accounts.svg';
import accountsActive from '../../images/sidebar/accounts-active.svg';
import investments from '../../images/sidebar/investments.svg';
import investmentsActive from '../../images/sidebar/investments-active.svg';
import creditCards from '../../images/sidebar/credit-cards.svg';
import creditCardsActive from '../../images/sidebar/credit-cards-active.svg';
import loans from '../../images/sidebar/loans.svg';
import loansActive from '../../images/sidebar/loans-active.svg';
import services from '../../images/sidebar/services.svg';
import servicesActive from '../../images/sidebar/services-active.svg';
import myPrivileges from '../../images/sidebar/my-privileges.svg';
import myPrivilegesActive from '../../images/sidebar/my-privileges-active.svg';
import settings from '../../images/sidebar/settings.svg';
import settingsActive from '../../images/sidebar/settings-active.svg';
import SidebarButton from '../SidebarButton/SidebarButton';

export default function Sidebar() {
  const pageList = [
    {
      page: 'Dashboard',
      link: '/dashboard',
      img: dashboard,
      activeImg: dashboardActive,
    },
    {
      page: 'Transactions',
      link: '/transactions',
      img: transactions,
      activeImg: transactionsActive,
    },
    {
      page: 'Accounts',
      link: '/accounts',
      img: accounts,
      activeImg: accountsActive,
    },
    {
      page: 'Investments',
      link: '/investments',
      img: investments,
      activeImg: investmentsActive,
    },
    {
      page: 'Credit Cards',
      link: '/credit-cards',
      img: creditCards,
      activeImg: creditCardsActive,
    },
    { page: 'Loans', link: '/loans', img: loans, activeImg: loansActive },
    {
      page: 'Services',
      link: '/services',
      img: services,
      activeImg: servicesActive,
    },
    {
      page: 'My Privileges',
      link: '/my-privileges',
      img: myPrivileges,
      activeImg: myPrivilegesActive,
    },
    {
      page: 'Setting',
      link: '/setting',
      img: settings,
      activeImg: settingsActive,
    },
  ];
  return (
    <nav className={s.sidebar}>
      <img src={logo} alt="" className={s.logo} />
      <ul>
        {pageList.map((item) => {
          return (
            <li key={item.page}>
              <SidebarButton item={item} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
