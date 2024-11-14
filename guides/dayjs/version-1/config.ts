// This is the config for the a version
// We currently only support a single version

// isDefault has to be set to true for the version which will be deployed. Meaning, there can be multiple version folders, but only one can be deployed
export default {
    // These settings are ignored on DB level for now 
    settings: {
        name: "V1",
        slug: "v1",
        isDefault: true,
    },
    // Sidebar configuration goes here
    // It is an array of pages, sections or links
    // Each page/section can have multiple pages
    // This is used to create a sidebar and link the content of a page to its corresponding sidebar item
    sidebar: [
        {
            type: "section",
            label: "Getting Started",
            visibility: "PUBLIC",
            pages: [
                {
                    // Page can only have two attributes: type and path
                    type: "page",
                    // Relative to the version folder
                    path: "./getting-started/introduction.mdx",
                    pages: []
                },
                {
                    type: "page",
                    path: "./getting-started/why-dayjs.mdx",
                    pages: []
                },
                {
                    type: "page",
                    path: "./getting-started/installation.mdx",
                    pages: [
                        {
                            type: "page",
                            path: "./getting-started/installation/nodejs.mdx",
                        },
                        {
                            type: "page",
                            path: "./getting-started/installation/browser.mdx",
                        },
                        {
                            type: "page",
                            path: "./getting-started/installation/typescript.mdx",
                        },
                    ]
                },
            ],
        },
        {
            type: "section",
            label: "Concepts",
            visibility: "PUBLIC",
            pages: [
                {
                    // Page can only have two attributes: type and path
                    type: "page",
                    // Relative to the version folder
                    path: "./concepts/parse.mdx",
                    pages: [
                        {
                            type: "page",
                            path: "./concepts/parse/now.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/parse/string.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/parse/string-format.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/parse/unix-timestamp-milliseconds.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/parse/unix-timestamp.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/parse/date.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/parse/object.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/parse/array.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/parse/utc.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/parse/dayjs-clone.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/parse/validation.mdx",
                        }
                    ]
                },
                {
                    type: "page",
                    path: "./concepts/get-set.mdx",
                    pages: [
                        {
                            type: "page",
                            path: "./concepts/get-set/millisecond.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/get-set/second.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/get-set/minute.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/get-set/hour.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/get-set/date.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/get-set/day.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/get-set/weekday.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/get-set/iso-weekday.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/get-set/day-of-year.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/get-set/week.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/get-set/iso-week.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/get-set/month.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/get-set/quarter.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/get-set/year.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/get-set/week-year.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/get-set/iso-week-year.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/get-set/iso-weeks-in-year.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/get-set/get.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/get-set/set.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/get-set/min.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/get-set/max.mdx",
                        }
                    ]
                },
                {
                    type: "page",
                    path: "./concepts/manipulate.mdx",
                    pages: [
                        {
                            type: "page",
                            path: "./concepts/manipulate/add.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/manipulate/subtract.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/manipulate/start-of-time.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/manipulate/end-of-time.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/manipulate/local.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/manipulate/utc.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/manipulate/utc-offset.mdx",
                        },
                    ]
                },
                {
                    type: "page",
                    path: "./concepts/display.mdx",
                    pages: [
                        {
                            type: "page",
                            path: "./concepts/display/format.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/display/time-from-now.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/display/time-from-x.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/display/time-to-now.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/display/time-to-x.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/display/calendar-time.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/display/difference.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/display/unix-timestamp-milliseconds.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/display/unix-timestamp.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/display/days-in-month.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/display/as-javascript-date.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/display/as-array.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/display/as-json.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/display/as-iso-string.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/display/as-object.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/display/as-string.mdx",
                        },
                    ]
                },
                {
                    type: "page",
                    path: "./concepts/query.mdx",
                    pages: [
                        {
                            type: "page",
                            path: "./concepts/query/is-before.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/query/is-same.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/query/is-after.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/query/is-same-or-before.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/query/is-same-or-after.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/query/is-between.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/query/is-a-dayjs.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/query/is-leap-year.mdx",
                        },
                    ]
                },
                {
                    type: "page",
                    path: "./concepts/i18n.mdx",
                    pages: [
                        {
                            type: "page",
                            path: "./concepts/i18n/loading-into-nodejs.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/i18n/loading-into-browser.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/i18n/changing-locale.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/i18n/instance-locale.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/i18n/getting-locale.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/i18n/listing-months-weekdays.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/i18n/locale-data.mdx",
                        },
                    ]
                },
                {
                    type: "page",
                    path: "./concepts/plugins.mdx",
                    pages: [
                        {
                            type: "page",
                            path: "./concepts/plugins/loading-into-nodejs.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/plugins/loading-into-browser.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/plugins/advanced-format.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/plugins/array-support.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/plugins/bad-mutable.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/plugins/bigint-support.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/plugins/buddhist-era.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/plugins/calendar.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/plugins/custom-parse-format.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/plugins/day-of-year.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/plugins/dev-helper.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/plugins/duration.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/plugins/is-between.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/plugins/is-leap-year.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/plugins/is-same-or-after.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/plugins/is-same-or-before.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/plugins/is-today.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/plugins/is-tomorrow.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/plugins/is-yesterday.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/plugins/iso-week.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/plugins/iso-weeks-in-year.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/plugins/locale-data.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/plugins/localized-format.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/plugins/min-max.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/plugins/object-support.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/plugins/plural-get-set.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/plugins/preparse-postformat.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/plugins/quarter-of-year.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/plugins/relative-time.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/plugins/timezone.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/plugins/to-array.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/plugins/to-object.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/plugins/update-locale.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/plugins/utc.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/plugins/week-of-year.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/plugins/week-year.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/plugins/weekday.mdx",
                        },
                    ]
                },
                {
                    type: "page",
                    path: "./concepts/customize.mdx",
                    pages: [
                        {
                            type: "page",
                            path: "./concepts/customize/month-names.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/customize/month-abbreviations.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/customize/weekday-names.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/customize/weekday-abbreviations.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/customize/weekday-min.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/customize/relative-time.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/customize/calendar.mdx",
                        },
                    ]
                },
                {
                    type: "page",
                    path: "./concepts/durations.mdx",
                    pages: [
                        {
                            type: "page",
                            path: "./concepts/durations/creating.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/durations/clone.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/durations/humanize.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/durations/format.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/durations/milliseconds.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/durations/seconds.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/durations/minutes.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/durations/hours.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/durations/days.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/durations/weeks.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/durations/months.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/durations/years.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/durations/add.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/durations/subtract.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/durations/diffing.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/durations/as.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/durations/get.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/durations/as-json.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/durations/is-a-duration.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/durations/as-iso-string.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/durations/locale.mdx",
                        },
                    ]
                },
                {
                    type: "page",
                    path: "./concepts/timezone.mdx",
                    pages: [
                        {
                            type: "page",
                            path: "./concepts/timezone/parsing-in-zone.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/timezone/converting-to-zone.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/timezone/guessing-user-timezone.mdx",
                        },
                        {
                            type: "page",
                            path: "./concepts/timezone/set-default-timezone.mdx",
                        }
                    ]
                }
            ],
        },
    ],
};
