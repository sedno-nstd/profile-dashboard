"use client";

import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, forwardRef } from "react";

interface HeaderData {
  username: string;
  createdAt: string;
  postsCount: number;
  followers: number;
  following: number;
}

interface HeaderProps {
  data: HeaderData;
  onDateChange?: (from: Date | null, to: Date | null) => void;
}

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect
      x="1.5"
      y="2.5"
      width="13"
      height="12"
      rx="1.5"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path
      d="M1 5.5H15M4.5 1V4M11.5 1V4"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="5" cy="9" r="0.5" fill="currentColor" />
    <circle cx="8" cy="9" r="0.5" fill="currentColor" />
    <circle cx="11" cy="9" r="0.5" fill="currentColor" />
    <circle cx="5" cy="12" r="0.5" fill="currentColor" />
    <circle cx="8" cy="12" r="0.5" fill="currentColor" />
    <circle cx="11" cy="12" r="0.5" fill="currentColor" />
  </svg>
);

const ClearIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path
      d="M11.3137 9.89949L7.07107 5.65685L11.3137 1.41421L9.8995 -4.64916e-06L5.65686 4.24264L1.41422 -4.64916e-06L6.19888e-06 1.41421L4.24265 5.65685L6.19888e-06 9.89949L1.41422 11.3137L5.65686 7.07106L9.8995 11.3137L11.3137 9.89949Z"
      fill="currentColor"
    />
  </svg>
);

const DateInput = forwardRef<
  HTMLDivElement,
  {
    value?: string;
    onClick?: () => void;
    onClear?: () => void;
    placeholder?: string;
  }
>(({ value, onClick, onClear, placeholder }, ref) => {
  return (
    <div ref={ref} className="date-box">
      <div className="date-box__content" onClick={onClick}>
        {value ? (
          <span className="date-box__value">{value}</span>
        ) : (
          <span className="date-box__placeholder">{placeholder}</span>
        )}
      </div>

      {value && onClear && (
        <button
          type="button"
          className="date-box__clear"
          onClick={(e) => {
            e.stopPropagation();
            onClear();
          }}
        >
          <ClearIcon />
        </button>
      )}

      <button type="button" className="date-box__calendar" onClick={onClick}>
        <CalendarIcon />
      </button>
    </div>
  );
});

DateInput.displayName = "DateInput";

export default function Header({ data, onDateChange }: HeaderProps) {
  const [dateFrom, setDateFrom] = useState<Date | null>(null);
  const [dateTo, setDateTo] = useState<Date | null>(null);

  const formattedDate = data?.createdAt
    ? data.createdAt.split("-").reverse().join("-")
    : "12-01-2026";

  const handleFromChange = (date: Date | null) => {
    setDateFrom(date);
    onDateChange?.(date, dateTo);
  };

  const handleToChange = (date: Date | null) => {
    setDateTo(date);
    onDateChange?.(dateFrom, date);
  };

  return (
    <header className="profile-header">
      <div className="profile-header__container">
        <div className="profile-header__avatar-wrapper">
          <Image src="/avatar.svg" alt="Avatar" width={138} height={138} />
        </div>

        <div className="profile-header__content">
          <div className="profile-header__meta-row">
            <h1 className="profile-header__username">
              {data?.username || "Guest"}
            </h1>
            <span className="profile-header__badge">
              Start on {formattedDate}
            </span>
          </div>

          <div className="profile-header__stats-row">
            <span className="profile-header__stat-item">
              <strong>{data?.postsCount ?? 0}</strong> posts
            </span>
            <span className="profile-header__stat-item">
              <strong>{data?.followers ?? 0}</strong> followers
            </span>
            <span className="profile-header__stat-item">
              <strong>{data?.following ?? 0}</strong> following
            </span>
          </div>

          <div className="profile-header__filter-row">
            <span className="profile-header__filter-label">Date</span>
            <div className="profile-header__date-inputs">
              <DatePicker
                selected={dateFrom}
                onChange={handleFromChange}
                dateFormat="dd.MM.yyyy"
                customInput={
                  <DateInput
                    placeholder="from"
                    onClear={() => handleFromChange(null)}
                  />
                }
                popperClassName="date-picker-popper"
                calendarClassName="date-picker-calendar"
                popperPlacement="bottom-start"
                showPopperArrow={false}
              />

              <DatePicker
                selected={dateTo}
                onChange={handleToChange}
                dateFormat="dd.MM.yyyy"
                customInput={
                  <DateInput
                    placeholder="09.08.2016"
                    onClear={() => handleToChange(null)}
                  />
                }
                popperClassName="date-picker-popper"
                calendarClassName="date-picker-calendar"
                popperPlacement="bottom-start"
                showPopperArrow={false}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
