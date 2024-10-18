export default {
  settings: {
    name: "V1",
    slug: "v1",
    isDefault: true,
  },
  sidebar: [
    {
      type: "section",
      label: "Get Started",
      visibility: "PUBLIC",
      pages: [
        {
          type: "page",
          path: "./get-started/overview.mdx",
        },
        {
          type: "page",
          path: "./get-started/quickstart.mdx",
        },
        {
          type: "page",
          path: "./get-started/setup.mdx",
          pages: [
            {
              type: "page",
              path: "./get-started/setup/install.mdx",
            },
            {
              type: "page",
              path: "./get-started/setup/authenticate.mdx",
            },
            {
              type: "page",
              path: "./get-started/setup/initialize-document.mdx",
            },
            {
              type: "page",
              path: "./get-started/setup/advanced.mdx",
            },
          ],
        },
      ],
    },
    {
      type: "section",
      label: "Key Concepts",
      visibility: "PUBLIC",
      pages: [
        {
          type: "page",
          path: "./key-concepts/overview.mdx",
        },
        {
          type: "page",
          path: "./key-concepts/organizations.mdx",
          pages: [
            {
              type: "page",
              path: "./key-concepts/organizations/setup.mdx",
            },
          ],
        },
        {
          type: "page",
          path: "./key-concepts/documents.mdx",
          pages: [
            {
              type: "page",
              path: "./key-concepts/documents/set-document.mdx",
            },
          ],
        },
        {
          type: "page",
          path: "./key-concepts/locations.mdx",
          pages: [
            {
              type: "page",
              path: "./key-concepts/locations/set-location.mdx",
            },
            {
              type: "page",
              path: "./key-concepts/locations/multiple-locations.mdx",
            },
            {
              type: "page",
              path: "./key-concepts/locations/remove-locations.mdx",
            },
          ],
        },
        {
          type: "page",
          path: "./key-concepts/users.mdx",
          pages: [
            {
              type: "page",
              path: "./key-concepts/users/contact-list.mdx",
            },
            {
              type: "page",
              path: "./key-concepts/users/organization-user-groups.mdx",
            },
            {
              type: "page",
              path: "./key-concepts/users/sign-in-user.mdx",
            },
            {
              type: "page",
              path: "./key-concepts/users/sign-out-user.mdx",
            },
          ],
        },
        {
          type: "page",
          path: "./key-concepts/access-control.mdx",
          pages: [
            {
              type: "page",
              path: "./key-concepts/access-control/overview.mdx",
            },
          ],
        },
      ],
    },
    {
      type: "section",
      label: "Async Collaboration",
      visibility: "PUBLIC",
      pages: [
        {
          type: "page",
          path: "./async-collaboration/comments.mdx",
          pages: [
            {
              type: "page",
              path: "./async-collaboration/comments/overview.mdx",
            },
            {
              type: "page",
              path: "./async-collaboration/comments/setup.mdx",
              pages: [
                {
                  type: "page",
                  path: "./async-collaboration/comments/setup/freestyle.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/comments/setup/page.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/comments/setup/popover.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/comments/setup/stream.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/comments/setup/text.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/comments/setup/tiptap.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/comments/setup/inline-comments.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/comments/setup/lottie-player-setup.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/comments/setup/video-player-setup.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/comments/setup/chart-comments-setup.mdx",
                },
              ],
            },
            {
              type: "page",
              path: "./async-collaboration/comments/customize-behavior.mdx",
              pages: [
                {
                  type: "page",
                  path: "./async-collaboration/comments/customize-behavior/action-methods.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/comments/customize-behavior/@mentions.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/comments/customize-behavior/custom-lists.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/comments/customize-behavior/custom-metadata.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/comments/customize-behavior/event-handlers.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/comments/customize-behavior/general-controls.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/comments/customize-behavior/modes.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/comments/customize-behavior/multimedia.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/comments/customize-behavior/retrieve-comments.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/comments/customize-behavior/task-management.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/comments/customize-behavior/ui-controls.mdx",
                },
              ],
            },
            {
              type: "page",
              path: "./async-collaboration/comments/customize-ui.mdx",
              pages: [
                {
                  type: "page",
                  path: "./async-collaboration/comments/customize-ui/comment-dialog.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/comments/customize-ui/comment-pin.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/comments/customize-ui/comment-tool.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/comments/customize-ui/comment-bubble.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/comments/customize-ui/comment-video-player.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/comments/customize-ui/confirmation-dialog.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/comments/customize-ui/inline-comments.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/comments/customize-ui/persistent-comment-mode-banner.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/comments/customize-ui/text-comment-tool.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/comments/customize-ui/text-comment-toolbar.mdx",
                },
              ],
            },
            {
              type: "page",
              path: "./async-collaboration/comments/notifications.mdx",
            },
            {
              type: "page",
              path: "./async-collaboration/comments/build-yourself.mdx",
              pages: [
                {
                  type: "page",
                  path: "./async-collaboration/comments/build-yourself/comment-thread.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/comments/build-yourself/comment-pin-positioning.mdx",
                },
              ],
            },
          ],
        },
        {
          type: "page",
          path: "./async-collaboration/comments-sidebar.mdx",
          pages: [
            {
              type: "page",
              path: "./async-collaboration/comments-sidebar/overview.mdx",
            },
            {
              type: "page",
              path: "./async-collaboration/comments-sidebar/setup.mdx",
            },
            {
              type: "page",
              path: "./async-collaboration/comments-sidebar/customize-behavior.mdx",
            },
            {
              type: "page",
              path: "./async-collaboration/comments-sidebar/customize-ui.mdx",
              pages: [
                {
                  type: "page",
                  path: "./async-collaboration/comments-sidebar/customize-ui/comments-sidebar.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/comments-sidebar/customize-ui/sidebar-button.mdx",
                },
              ],
            },
          ],
        },
        {
          type: "page",
          path: "./async-collaboration/notifications.mdx",
          pages: [
            {
              type: "page",
              path: "./async-collaboration/notifications/overview.mdx",
            },
            {
              type: "page",
              path: "./async-collaboration/notifications/setup.mdx",
            },
            {
              type: "page",
              path: "./async-collaboration/notifications/customize-behavior.mdx",
            },
            {
              type: "page",
              path: "./async-collaboration/notifications/customize-ui.mdx",
              pages: [
                {
                  type: "page",
                  path: "./async-collaboration/notifications/customize-ui/notifications-tool.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/notifications/customize-ui/notifications-panel.mdx",
                },
              ],
            },
          ],
        },
        {
          type: "page",
          path: "./async-collaboration/reactions.mdx",
          pages: [
            {
              type: "page",
              path: "./async-collaboration/reactions/overview.mdx",
            },
            {
              type: "page",
              path: "./async-collaboration/reactions/setup.mdx",
            },
            {
              type: "page",
              path: "./async-collaboration/reactions/customize-ui.mdx",
              pages: [
                {
                  type: "page",
                  path: "./async-collaboration/reactions/customize-ui/overview.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/reactions/customize-ui/variants.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/reactions/customize-ui/styling.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/reactions/customize-ui/subcomponents.mdx",
                },
              ],
            },
          ],
        },
        {
          type: "page",
          path: "./async-collaboration/recorder.mdx",
          pages: [
            {
              type: "page",
              path: "./async-collaboration/recorder/overview.mdx",
            },
            {
              type: "page",
              path: "./async-collaboration/recorder/setup.mdx",
            },
            {
              type: "page",
              path: "./async-collaboration/recorder/customize-behavior.mdx",
              pages: [
                {
                  type: "page",
                  path: "./async-collaboration/recorder/customize-behavior/velt-recorder-tool.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/recorder/customize-behavior/velt-recorder-control-panel.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/recorder/customize-behavior/velt-recorder-player.mdx",
                },
              ],
            },
            {
              type: "page",
              path: "./async-collaboration/recorder/customize-ui.mdx",
              page: [
                {
                  type: "page",
                  path: "./async-collaboration/recorder/customize-ui/parts.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/recorder/customize-ui/slots.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/recorder/customize-ui/variables.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/recorder/customize-ui/custom-button.mdx",
                },
              ],
            },
          ],
        },
        {
          type: "page",
          path: "./async-collaboration/view-analytics.mdx",
          pages: [
            {
              type: "page",
              path: "./async-collaboration/view-analytics/overview.mdx",
            },
            {
              type: "page",
              path: "./async-collaboration/view-analytics/setup.mdx",
            },
            {
              type: "page",
              path: "./async-collaboration/view-analytics/customize-behavior.mdx",
            },
          ],
        },
        {
          type: "page",
          path: "./async-collaboration/arrows.mdx",
          pages: [
            {
              type: "page",
              path: "./async-collaboration/arrows/overview.mdx",
            },
            {
              type: "page",
              path: "./async-collaboration/arrows/setup.mdx",
            },
            {
              type: "page",
              path: "./async-collaboration/arrows/customize-behavior.mdx",
            },
            {
              type: "page",
              path: "./async-collaboration/arrows/customize-ui.mdx",
              pages: [
                {
                  type: "page",
                  path: "./async-collaboration/arrows/customize-ui/parts.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/arrows/customize-ui/slots.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/arrows/customize-ui/variables.mdx",
                },
                {
                  type: "page",
                  path: "./async-collaboration/arrows/customize-ui/custom-button.mdx",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "section",
      label: "Realtime Collaboration",
      visibility: "PUBLIC",
      pages: [
        {
          type: "page",
          path: "./realtime-collaboration/presence.mdx",
          pages: [
            {
              type: "page",
              path: "./realtime-collaboration/presence/overview.mdx",
            },
            {
              type: "page",
              path: "./realtime-collaboration/presence/setup.mdx",
            },
            {
              type: "page",
              path: "./realtime-collaboration/presence/customize-behavior.mdx",
            },
            {
              type: "page",
              path: "./realtime-collaboration/presence/customize-ui.mdx",
              pages: [
                {
                  type: "page",
                  path: "./realtime-collaboration/presence/customize-ui/parts.mdx",
                },
                {
                  type: "page",
                  path: "./realtime-collaboration/presence/customize-ui/variables.mdx",
                },
                {
                  type: "page",
                  path: "./realtime-collaboration/presence/customize-ui/create-your-own-ui.mdx",
                },
              ],
            },
          ],
        },
        {
          type: "page",
          path: "./realtime-collaboration/cursors.mdx",
          pages: [
            {
              type: "page",
              path: "./realtime-collaboration/cursors/overview.mdx",
            },
            {
              type: "page",
              path: "./realtime-collaboration/cursors/setup.mdx",
            },
            {
              type: "page",
              path: "./realtime-collaboration/cursors/customize-behavior.mdx",
            },
            {
              type: "page",
              path: "./realtime-collaboration/cursors/customize-ui.mdx",
              pages: [
                {
                  type: "page",
                  path: "./realtime-collaboration/cursors/customize-ui/parts.mdx",
                },
                {
                  type: "page",
                  path: "./realtime-collaboration/cursors/customize-ui/slots.mdx",
                },
                {
                  type: "page",
                  path: "./realtime-collaboration/cursors/customize-ui/variables.mdx",
                },
                {
                  type: "page",
                  path: "./realtime-collaboration/cursors/customize-ui/create-your-own-ui.mdx",
                },
              ],
            },
          ],
        },
        {
          type: "page",
          path: "./realtime-collaboration/flock-mode.mdx",
          pages: [
            {
              type: "page",
              path: "./realtime-collaboration/flock-mode/overview.mdx",
            },
            {
              type: "page",
              path: "./realtime-collaboration/flock-mode/setup.mdx",
            },
            {
              type: "page",
              path: "./realtime-collaboration/flock-mode/customize-behavior.mdx",
            },
          ]
        },
        {
          type: "page",
          path: "./realtime-collaboration/huddle.mdx",
          pages: [
            {
              type: "page",
              path: "./realtime-collaboration/huddle/overview.mdx",
            },
            {
              type: "page",
              path: "./realtime-collaboration/huddle/setup.mdx",
            },
            {
              type: "page",
              path: "./realtime-collaboration/huddle/customize-behavior.mdx",
            },
            {
              type: "page",
              path: "./realtime-collaboration/huddle/customize-ui.mdx",
              pages: [
                {
                  type: "page",
                  path: "./realtime-collaboration/huddle/customize-ui/parts.mdx",
                },
                {
                  type: "page",
                  path: "./realtime-collaboration/huddle/customize-ui/slots.mdx",
                },
                {
                  type: "page",
                  path: "./realtime-collaboration/huddle/customize-ui/variables.mdx",
                },
              ]
            },
            {
              type: "page",
              path: "./realtime-collaboration/huddle/webhooks.mdx",
            }
          ]
        },
        {
          type: "page",
          path: "./realtime-collaboration/live-selection.mdx",
          pages: [
            {
              type: "page",
              path: "./realtime-collaboration/live-selection/overview.mdx",
            },
            {
              type: "page",
              path: "./realtime-collaboration/live-selection/setup.mdx",
            },
            {
              type: "page",
              path: "./realtime-collaboration/live-selection/customize-behavior.mdx",
            }
          ]
        },
        {
          type: "page",
          path: "./realtime-collaboration/live-state-sync.mdx",
          pages: [
            {
              type: "page",
              path: "./realtime-collaboration/live-state-sync/overview.mdx",
            },
            {
              type: "page",
              path: "./realtime-collaboration/live-state-sync/setup.mdx",
            },
            {
              type: "page",
              path: "./realtime-collaboration/live-state-sync/redux-middleware.mdx",
            }
          ]
        },
        {
          type: "page",
          path: "./realtime-collaboration/single-editor-mode.mdx",
          pages: [
            {
              type: "page",
              path: "./realtime-collaboration/single-editor-mode/overview.mdx",
            },
            {
              type: "page",
              path: "./realtime-collaboration/single-editor-mode/setup.mdx",
            }
          ]
        },
        {
          type: "page",
          path: "./realtime-collaboration/video-player-sync.mdx",
          pages: [
            {
              type: "page",
              path: "./realtime-collaboration/video-player-sync/overview.mdx",
            },
            {
              type: "page",
              path: "./realtime-collaboration/video-player-sync/setup.mdx",
            }
          ]
        }
      ],
    },
    {
      type: "section",
      label: "Email Notifications",
      visibility: "PUBLIC",
      pages: [
        {
          type: "page",
          path: "./email-notifications/overview.mdx",
        }
      ]
    },
    {
      type: "section",
      label: "Webhooks",
      visibility: "PUBLIC",
      pages: [
        {
          type: "page",
          path: "./webhooks/overview.mdx",
        },
        {
          type: "page",
          path: "./webhooks/comments-webhooks.mdx",
        },
        {
          type: "page",
          path: "./webhooks/huddle-webhooks.mdx",
        }
      ]
    },
    {
      type: "section",
      label: "Security",
      visibility: "PUBLIC",
      pages: [
        {
          type: "page",
          path: "./security/content-security-policy.mdx",
        },
        {
          type: "page",
          path: "./security/auth-tokens.mdx",
        },
        {
          type: "page",
          path: "./security/jwt-tokens.mdx",
        },
        {
          type: "page",
          path: "./security/proxy-server.mdx",
        },
      ]
    },
    {
      type: "section",
      label: "Migration",
      visibility: "PUBLIC",
      pages: [
        {
          type: "page",
          path: "./migration/cord-migration.mdx",
          pages: [
            {
              type: "page",
              path: "./migration/cord-migration/migration-process-overview.mdx",
            },
            {
              type: "page",
              path: "./migration/cord-migration/export-cord-data-for-migration.mdx",
            }
          ]
        }
      ]
    }
  ],
};
