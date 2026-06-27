"use client";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, forwardRef } from "react";
import ClearIcon from "../../public/icons/ClearIcon";
import CalendarIcon from "../../public/icons/CalendarIcon";

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
