import React, { useState } from "react";
import './App.css';

const navigation = [
  { id: "overview", label: "Overview", icon: "⌂" },
  { id: "transactions", label: "Transactions", icon: "↕" },
  { id: "analytics", label: "Analytics", icon: "⌁" },
  { id: "cards", label: "Cards", icon: "▣" },
  { id: "savings", label: "Savings", icon: "◎" },
];

const transactions = [
  {
    id: 1,
    icon: "🍔",
    title: "Jollibee",
    category: "Food",
    time: "12:34 PM",
    amount: -245,
  },
  {
    id: 2,
    icon: "💼",
    title: "Salary",
    category: "Income",
    time: "10:02 AM",
    amount: 18500,
  },
  {
    id: 3,
    icon: "🚕",
    title: "Grab",
    category: "Transportation",
    time: "8:43 AM",
    amount: -186,
  },
  {
    id: 4,
    icon: "☕",
    title: "Coffee",
    category: "Food",
    time: "7:21 AM",
    amount: -165,
  },
  {
    id: 5,
    icon: "🛍️",
    title: "Uniqlo",
    category: "Shopping",
    time: "Yesterday",
    amount: -1490,
  },
];

const spending = [
  { day: "Mon", amount: 42 },
  { day: "Tue", amount: 66 },
  { day: "Wed", amount: 47 },
  { day: "Thu", amount: 82 },
  { day: "Fri", amount: 55 },
  { day: "Sat", amount: 95 },
  { day: "Sun", amount: 63 },
];

function App() {
  const [activePage, setActivePage] = useState("overview");
  const [balanceVisible, setBalanceVisible] = useState(true);

  const changePage = (page) => {
    setActivePage(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-[#06111f] text-white">

      <aside className="fixed left-0 top-0 z-50 hidden h-screen w-[215px] flex-col border-r border-white/10 bg-[#081827] p-4 lg:flex">
        {/* LOGO */}
        <button
          onClick={() => changePage("overview")}
          className="mb-6 flex items-center gap-2 px-2"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#19a7b8] text-sm font-black text-white shadow-[0_3px_0_#0c7180]">
            ₱
          </div>

          <span className="text-sm font-black tracking-[0.18em] text-white">
            TIPID
          </span>
        </button>

        {/* NAVIGATION */}
        <nav className="space-y-1.5">
          {navigation.map((item) => {
            const active = activePage === item.id;

            return (
              <button
                key={item.id}
                onClick={() => changePage(item.id)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[13px] font-bold transition-all ${
                  active
                    ? "bg-[#12334a] text-[#42d5e4]"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-lg text-sm ${
                    active
                      ? "bg-[#19a7b8] text-white"
                      : "bg-white/5 text-slate-400"
                  }`}
                >
                  {item.icon}
                </span>

                {item.label}
              </button>
            );
          })}
        </nav>

        {/* MINI SAVINGS */}
        <div className="mt-auto rounded-2xl border border-white/10 bg-[#0d2030] p-3">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Saving goal
            </p>

            <span className="text-xs">🎯</span>
          </div>

          <p className="mt-2 text-sm font-black">₱6,800</p>

          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[68%] rounded-full bg-[#19a7b8]" />
          </div>

          <div className="mt-2 flex justify-between text-[9px] font-semibold text-slate-500">
            <span>68%</span>
            <span>₱10,000 Goal</span>
          </div>
        </div>

        {/* PROFILE */}
        <div className="mt-3 flex items-center gap-2 border-t border-white/10 pt-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#19a7b8] text-[10px] font-black">
            JC
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-bold">John Cole</p>
            <p className="truncate text-[9px] text-slate-500">
              Personal Account
            </p>
          </div>

          <button className="text-xs text-slate-500">•••</button>
        </div>
      </aside>

      <main className="min-h-screen pb-24 lg:ml-[215px] lg:pb-8">
        {/* HEADER */}
        <header className="sticky top-0 z-40 border-b border-white/10 bg-[#06111f]/90 px-4 py-3 backdrop-blur-xl sm:px-6">
          <div className="mx-auto flex max-w-[1500px] items-center justify-between">
            {/* MOBILE LOGO */}
            <button
              onClick={() => changePage("overview")}
              className="flex items-center gap-2 lg:hidden"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#19a7b8] text-xs font-black shadow-[0_3px_0_#0c7180]">
                ₱
              </div>

              <span className="text-xs font-black tracking-[0.16em]">
                TIPID
              </span>
            </button>

            {/* DESKTOP TITLE */}
            <div className="hidden lg:block">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#38c7d7]">
                Money Tracker
              </p>

              <h2 className="text-lg font-black">
                {navigation.find((item) => item.id === activePage)?.label}
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-[#0d2030] text-sm hover:bg-[#123049]">
                🔔
              </button>

              <button className="flex h-9 items-center gap-1 rounded-xl bg-[#19a7b8] px-3 text-xs font-black shadow-[0_3px_0_#0c7180] transition hover:-translate-y-[1px]">
                <span className="text-base">+</span>

                <span className="hidden sm:block">Add Transaction</span>
              </button>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-[1500px] p-4 sm:p-6">
          {activePage === "overview" && (
            <OverviewPage
              balanceVisible={balanceVisible}
              setBalanceVisible={setBalanceVisible}
              changePage={changePage}
            />
          )}

          {activePage === "transactions" && <TransactionsPage />}

          {activePage === "analytics" && <AnalyticsPage />}

          {activePage === "cards" && <CardsPage />}

          {activePage === "savings" && <SavingsPage />}
        </div>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#081827]/95 px-2 pb-[max(7px,env(safe-area-inset-bottom))] pt-2 backdrop-blur-xl lg:hidden">
        <div className="mx-auto flex max-w-md items-center justify-around">
          {navigation.map((item) => {
            const active = activePage === item.id;

            return (
              <button
                key={item.id}
                onClick={() => changePage(item.id)}
                className={`flex min-w-[55px] flex-col items-center gap-1 rounded-xl px-1 py-1 transition ${
                  active ? "text-[#42d5e4]" : "text-slate-500"
                }`}
              >
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-lg text-sm ${
                    active ? "bg-[#12334a]" : ""
                  }`}
                >
                  {item.icon}
                </span>

                <span className="text-[8px] font-bold sm:text-[9px]">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

function OverviewPage({
  balanceVisible,
  setBalanceVisible,
  changePage,
}) {
  return (
    <>
      {/* WELCOME */}
      <section className="mb-5">
        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#38c7d7]">
          Monday • September 14
        </p>

        <h1 className="mt-1 text-2xl font-black tracking-tight sm:text-3xl">
          Good morning, John 👋
        </h1>

        <p className="mt-1 text-sm font-medium text-slate-500">
          Here's your money activity for today.
        </p>
      </section>

      {/* STAT CARDS */}
      <section className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        <StatCard
          title="Total Balance"
          value={balanceVisible ? "₱42,680" : "₱••••••"}
          icon="💰"
          footer="+8.4% this month"
          footerColor="text-emerald-400"
          action={
            <button
              onClick={() => setBalanceVisible(!balanceVisible)}
              className="text-[9px] font-bold text-slate-500"
            >
              {balanceVisible ? "Hide" : "Show"}
            </button>
          }
        />

        <StatCard
          title="Income"
          value="₱28,500"
          icon="↗"
          footer="+12% this month"
          footerColor="text-emerald-400"
        />

        <StatCard
          title="Spent"
          value="₱12,820"
          icon="↘"
          footer="₱17,180 remaining"
          footerColor="text-slate-500"
        />

        <StatCard
          title="Pending"
          value="₱2,450"
          icon="⏳"
          footer="3 payments today"
          footerColor="text-amber-400"
        />
      </section>

      {/* MAIN GRID */}
      <section className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-[1.65fr_1fr]">
        {/* LEFT */}
        <div className="space-y-4">
          {/* SPENDING */}
          <DarkCard>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-black">Spending Overview</h3>

                <p className="mt-1 text-xs font-medium text-slate-500">
                  Weekly expenses
                </p>
              </div>

              <button className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[10px] font-bold text-slate-400">
                This week⌄
              </button>
            </div>

            <div className="mt-5 flex items-end justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-500">
                  Total spending
                </p>

                <h2 className="mt-1 text-2xl font-black">₱4,840</h2>
              </div>

              <span className="rounded-lg bg-emerald-500/10 px-2 py-1 text-[10px] font-black text-emerald-400">
                ↓ 12%
              </span>
            </div>

            <div className="mt-6 flex h-[180px] items-end justify-between gap-2">
              {spending.map((item, index) => (
                <div
                  key={item.day}
                  className="flex h-full flex-1 flex-col items-center justify-end"
                >
                  <div className="flex h-full w-full items-end justify-center">
                    <div
                      style={{ height: `${item.amount}%` }}
                      className={`w-full max-w-[42px] rounded-t-lg transition ${
                        index === 5
                          ? "bg-[#22b8c8]"
                          : "bg-[#15344b] hover:bg-[#1e4a65]"
                      }`}
                    />
                  </div>

                  <span
                    className={`mt-2 text-[9px] font-black ${
                      index === 5
                        ? "text-[#38c7d7]"
                        : "text-slate-600"
                    }`}
                  >
                    {item.day.slice(0, 1)}
                  </span>
                </div>
              ))}
            </div>
          </DarkCard>

          {/* TRANSACTIONS */}
          <DarkCard>
            <div className="mb-3 flex items-center justify-between">
              <div>
                <h3 className="font-black">Recent Transactions</h3>

                <p className="mt-1 text-xs text-slate-500">
                  Latest money activity
                </p>
              </div>

              <button
                onClick={() => changePage("transactions")}
                className="text-[10px] font-black text-[#38c7d7]"
              >
                View all →
              </button>
            </div>

            <TransactionList items={transactions.slice(0, 4)} />
          </DarkCard>
        </div>

        {/* RIGHT */}
        <div className="space-y-4">
          {/* CARD */}
          <div>
            <div className="mb-2 flex items-center justify-between px-1">
              <h3 className="text-sm font-black">My Card</h3>

              <button
                onClick={() => changePage("cards")}
                className="text-[10px] font-black text-[#38c7d7]"
              >
                View cards
              </button>
            </div>

            <BankCard />
          </div>

          {/* PAYMENTS */}
          <DarkCard>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-black">Today's Payments</h3>

                <p className="mt-1 text-[10px] text-slate-500">
                  3 payments pending
                </p>
              </div>

              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-400/10 text-sm">
                ⏳
              </span>
            </div>

            <div className="mt-4 space-y-2">
              <Payment
                icon="⚡"
                name="Electricity"
                category="Meralco"
                amount="₱1,750"
              />

              <Payment
                icon="🎬"
                name="Netflix"
                category="Subscription"
                amount="₱549"
              />

              <Payment
                icon="☁️"
                name="iCloud"
                category="Subscription"
                amount="₱149"
              />
            </div>
          </DarkCard>

          {/* BUDGET */}
          <DarkCard>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-black">Monthly Budget</p>

                <p className="mt-1 text-[10px] text-slate-500">
                  September
                </p>
              </div>

              <span className="rounded-lg bg-[#19a7b8]/10 px-2 py-1 text-[10px] font-black text-[#38c7d7]">
                43%
              </span>
            </div>

            <div className="mt-4 flex items-end justify-between">
              <div>
                <p className="text-xl font-black">₱12,820</p>

                <p className="text-[10px] text-slate-500">
                  of ₱30,000
                </p>
              </div>

              <span className="text-[10px] font-bold text-emerald-400">
                ₱17,180 left
              </span>
            </div>

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[43%] rounded-full bg-[#19a7b8]" />
            </div>
          </DarkCard>
        </div>
      </section>
    </>
  );
}

function TransactionsPage() {
  return (
    <PageContainer
      eyebrow="Money Activity"
      title="Transactions"
      description="See where your money is going."
    >
      <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-4">
        <MiniCard title="This Month" value="₱12,820" />
        <MiniCard title="Transactions" value="47" />
        <MiniCard title="Income" value="₱28,500" />
        <MiniCard title="Expenses" value="₱12,820" />
      </div>

      <DarkCard>
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-black">All Transactions</h3>

            <p className="text-xs text-slate-500">
              Your transaction history
            </p>
          </div>

          <div className="flex gap-2">
            <button className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-slate-400">
              Filter
            </button>

            <button className="rounded-xl bg-[#19a7b8] px-3 py-2 text-xs font-black">
              + Add
            </button>
          </div>
        </div>

        <TransactionList items={transactions} />
      </DarkCard>
    </PageContainer>
  );
}

function AnalyticsPage() {
  return (
    <PageContainer
      eyebrow="Insights"
      title="Analytics"
      description="Understand your spending habits."
    >
      <div className="grid gap-4 xl:grid-cols-[1.7fr_1fr]">
        <DarkCard>
          <h3 className="font-black">Monthly Spending</h3>

          <p className="mt-1 text-xs text-slate-500">
            September performance
          </p>

          <div className="mt-8 flex h-[300px] items-end justify-between gap-3">
            {spending.map((item, index) => (
              <div
                key={item.day}
                className="flex h-full flex-1 flex-col items-center justify-end"
              >
                <div className="flex h-full w-full items-end justify-center">
                  <div
                    style={{ height: `${item.amount}%` }}
                    className={`w-full max-w-[55px] rounded-t-xl ${
                      index === 5
                        ? "bg-[#19a7b8]"
                        : "bg-[#15344b]"
                    }`}
                  />
                </div>

                <p className="mt-3 text-[10px] font-bold text-slate-500">
                  {item.day}
                </p>
              </div>
            ))}
          </div>
        </DarkCard>

        <div className="space-y-4">
          <DarkCard>
            <p className="text-xs font-semibold text-slate-500">
              Biggest Expense
            </p>

            <p className="mt-2 text-2xl font-black">₱4,200</p>

            <p className="mt-1 text-xs text-[#38c7d7]">
              Food & Dining
            </p>
          </DarkCard>

          <DarkCard>
            <p className="text-xs font-semibold text-slate-500">
              Average Daily Spend
            </p>

            <p className="mt-2 text-2xl font-black">₱915</p>

            <p className="mt-1 text-xs text-emerald-400">
              8% lower than August
            </p>
          </DarkCard>

          <DarkCard>
            <p className="text-xs font-semibold text-slate-500">
              Savings Rate
            </p>

            <p className="mt-2 text-2xl font-black">34%</p>

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[34%] rounded-full bg-[#19a7b8]" />
            </div>
          </DarkCard>
        </div>
      </div>
    </PageContainer>
  );
}

function CardsPage() {
  return (
    <PageContainer
      eyebrow="Wallet"
      title="My Cards"
      description="Manage your linked cards."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <BankCard />

        <div className="flex min-h-[230px] cursor-pointer flex-col items-center justify-center rounded-[24px] border border-dashed border-white/20 bg-[#0b1b2a] transition hover:border-[#19a7b8]/60 hover:bg-[#0e2335]">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-xl text-[#38c7d7]">
            +
          </div>

          <p className="mt-3 text-sm font-black">Add New Card</p>

          <p className="mt-1 text-[10px] text-slate-500">
            Connect a debit or credit card
          </p>
        </div>
      </div>
    </PageContainer>
  );
}

function SavingsPage() {
  return (
    <PageContainer
      eyebrow="Financial Goals"
      title="Savings"
      description="Build better saving habits."
    >
      <div className="grid gap-4 xl:grid-cols-[1.5fr_1fr]">
        <DarkCard>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-[#38c7d7]">
                Main Savings Goal
              </p>

              <h3 className="mt-1 text-xl font-black">
                Emergency Fund
              </h3>
            </div>

            <span className="text-3xl">🎯</span>
          </div>

          <div className="mt-8">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-3xl font-black">₱6,800</p>

                <p className="mt-1 text-xs text-slate-500">
                  saved of ₱10,000
                </p>
              </div>

              <p className="text-sm font-black text-[#38c7d7]">
                68%
              </p>
            </div>

            <div className="mt-4 h-4 overflow-hidden rounded-full bg-white/10 p-[3px]">
              <div className="h-full w-[68%] rounded-full bg-[#19a7b8]" />
            </div>
          </div>

          <button className="mt-6 rounded-xl bg-[#19a7b8] px-4 py-2.5 text-xs font-black shadow-[0_3px_0_#0c7180]">
            + Add Savings
          </button>
        </DarkCard>

        <div className="grid grid-cols-2 gap-3 xl:grid-cols-1">
          <MiniCard title="Saved This Month" value="₱2,350" />
          <MiniCard title="Goal Remaining" value="₱3,200" />
        </div>
      </div>
    </PageContainer>
  );
}


function PageContainer({
  eyebrow,
  title,
  description,
  children,
}) {
  return (
    <>
      <section className="mb-5">
        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#38c7d7]">
          {eyebrow}
        </p>

        <h1 className="mt-1 text-2xl font-black sm:text-3xl">
          {title}
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          {description}
        </p>
      </section>

      {children}
    </>
  );
}

function DarkCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-[22px] border border-white/10 bg-[#0b1b2a] p-4 shadow-[0_4px_0_#040b12] sm:p-5 ${className}`}
    >
      {children}
    </div>
  );
}

function StatCard({
  title,
  value,
  icon,
  footer,
  footerColor,
  action,
}) {
  return (
    <div className="rounded-[20px] border border-white/10 bg-[#0b1b2a] p-3.5 shadow-[0_4px_0_#040b12] sm:p-4">
      <div className="flex items-center justify-between">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#12334a] text-sm">
          {icon}
        </div>

        {action}
      </div>

      <p className="mt-4 text-[10px] font-bold text-slate-500 sm:text-xs">
        {title}
      </p>

      <h3 className="mt-1 text-lg font-black tracking-tight sm:text-2xl">
        {value}
      </h3>

      <p
        className={`mt-2 text-[9px] font-bold sm:text-[10px] ${footerColor}`}
      >
        {footer}
      </p>
    </div>
  );
}

function MiniCard({ title, value }) {
  return (
    <DarkCard>
      <p className="text-[10px] font-bold text-slate-500">
        {title}
      </p>

      <p className="mt-2 text-xl font-black">{value}</p>
    </DarkCard>
  );
}

function TransactionList({ items }) {
  return (
    <div className="space-y-1">
      {items.map((transaction) => (
        <div
          key={transaction.id}
          className="flex items-center gap-3 rounded-xl px-2 py-2.5 transition hover:bg-white/[0.03]"
        >
          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#10283b] text-base">
            {transaction.icon}
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-black sm:text-sm">
              {transaction.title}
            </p>

            <div className="mt-0.5 flex items-center gap-1.5 text-[9px] font-medium text-slate-500 sm:text-[10px]">
              <span>{transaction.category}</span>
              <span>•</span>
              <span>{transaction.time}</span>
            </div>
          </div>

          <p
            className={`text-xs font-black sm:text-sm ${
              transaction.amount > 0
                ? "text-emerald-400"
                : "text-white"
            }`}
          >
            {transaction.amount > 0 ? "+" : "-"}₱
            {Math.abs(transaction.amount).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}

function BankCard() {
  return (
    <div className="relative min-h-[220px] overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0e3855] via-[#0c5368] to-[#15a1ae] p-5 shadow-[0_5px_0_#03111d]">
      <div className="absolute -right-14 -top-16 h-40 w-40 rounded-full border-[25px] border-white/5" />

      <div className="absolute -bottom-20 -left-12 h-44 w-44 rounded-full border-[30px] border-white/5" />

      <div className="relative z-10 flex h-full min-h-[180px] flex-col justify-between">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/60">
              TIPID
            </p>

            <p className="mt-1 text-xs font-bold">Debit Card</p>
          </div>

          <span className="text-xl font-black">₱</span>
        </div>

        <div>
          <p className="text-[10px] font-medium text-white/60">
            Available balance
          </p>

          <p className="mt-1 text-2xl font-black">
            ₱24,820.50
          </p>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <p className="font-mono text-xs font-bold tracking-[0.15em] text-white/80">
              •••• •••• •••• 8421
            </p>

            <p className="mt-2 text-[9px] font-bold uppercase tracking-wider text-white/60">
              John Cole
            </p>
          </div>

          <div className="flex">
            <div className="h-7 w-7 rounded-full bg-white/70" />

            <div className="-ml-2.5 h-7 w-7 rounded-full bg-white/30" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Payment({ icon, name, category, amount }) {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-white/[0.03] p-2.5">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-sm">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-xs font-bold">{name}</p>

        <p className="mt-0.5 text-[9px] text-slate-500">
          {category}
        </p>
      </div>

      <p className="text-xs font-black">{amount}</p>
    </div>
  );
}

export default App;