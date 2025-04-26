import React, { useState } from "react";
import "./index.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  TeamOutlined,
  PieChartOutlined,
  DownOutlined,
  SettingOutlined,
  LogoutOutlined,
  DashboardOutlined,
  NotificationOutlined,
  ShoppingOutlined,
  DollarOutlined,
  FileTextOutlined,
  EditOutlined,
} from "@ant-design/icons";
import {
  Button,
  Layout,
  Menu,
  Dropdown,
  Space,
  Avatar,
  Badge,
  Divider,
} from "antd";
import type { MenuProps } from "antd";
import styled from "styled-components";

const { Header, Sider, Content } = Layout;

// Paleta de colores para venta de motos (rojo, negro, gris)
const colorPalette = {
  primary: "#E74C3C", // Rojo vibrante
  secondary: "#2C3E50", // Azul oscuro/negro
  accent: "#E67E22", // Naranja
  background: "#ECF0F1", // Gris claro
  textDark: "#2C3E50", // Texto oscuro
  textLight: "#FFFFFF", // Blanco
  highlight: "#F1C40F", // Amarillo
  notification: "#E74C3C", // Rojo para notificaciones
};

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  // Menú desplegable mejorado
  const profileMenu: MenuProps["items"] = [
    {
      key: "header",
      label: (
        <div
          style={{
            padding: "12px 16px",
            display: "flex",
            alignItems: "center",
            background: `linear-gradient(90deg, ${colorPalette.primary}20, ${colorPalette.secondary}20)`,
          }}
        >
          <Badge dot color={colorPalette.notification}>
            <Avatar
              size="large"
              style={{
                backgroundColor: colorPalette.primary,
                marginRight: 12,
              }}
              icon={<UserOutlined />}
            />
          </Badge>
          <div>
            <div
              style={{
                fontWeight: 600,
                color: colorPalette.primary,
                fontSize: 15,
              }}
            >
              Carlos Moto
            </div>
            <div
              style={{
                color: colorPalette.textDark,
                fontSize: 12,
                opacity: 0.8,
              }}
            >
              Gerente de Ventas
            </div>
          </div>
        </div>
      ),
      disabled: true,
      style: { cursor: "default" },
    },
    {
      type: "divider",
    },
    {
      key: "notifications",
      icon: <NotificationOutlined style={{ color: colorPalette.accent }} />,
      label: "Notificaciones",
      style: { fontWeight: 500 },
    },
    {
      key: "settings",
      icon: <SettingOutlined style={{ color: colorPalette.primary }} />,
      label: "Configuración",
      children: [
        {
          key: "settings:1",
          icon: <ShoppingOutlined />,
          label: "Config. Ventas",
          style: { paddingLeft: 24 },
        },
        {
          key: "settings:2",
          icon: <DollarOutlined />,
          label: "Métodos de Pago",
          style: { paddingLeft: 24 },
        },
      ],
    },
    {
      type: "divider",
    },
    {
      key: "logout",
      icon: <LogoutOutlined style={{ color: colorPalette.notification }} />,
      label: "Cerrar sesión",
      danger: true,
      style: { fontWeight: 500 },
    },
  ];

  const HoverableSpace = styled(Space)`
    cursor: pointer;
    padding: 8px 12px;
    border-radius: 8px;
    transition: all 0.3s;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  `;

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        background: colorPalette.background,
      }}
    >
      <Layout style={{ height: "100%", width: "100%" }}>
        {/* Sidebar con temática de motos */}
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          collapsedWidth={80}
          width={250}
          style={{
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            zIndex: 10,
            background: `linear-gradient(180deg, ${colorPalette.primary} 0%, ${colorPalette.secondary} 100%)`,
            boxShadow: "4px 0 10px rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: colorPalette.textLight,
              fontSize: collapsed ? 16 : 24,
              fontWeight: "bold",
              borderBottom: `1px solid rgba(255,255,255,0.1)`,
            }}
          >
            {collapsed ? (
              <EditOutlined
                style={{ fontSize: 24, color: colorPalette.highlight }}
              />
            ) : (
              <span style={{ color: colorPalette.highlight }}>
                MOTO<span style={{ color: colorPalette.textLight }}>SHOP</span>
              </span>
            )}
          </div>

          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "calc(100% - 64px)",
              background: "transparent",
              borderRight: "none",
              padding: "8px 0",
            }}
            items={[
              {
                key: "1",
                icon: (
                  <DashboardOutlined
                    style={{ fontSize: 18, color: colorPalette.highlight }}
                  />
                ),
                label: (
                  <span style={{ color: colorPalette.textLight }}>
                    Dashboard
                  </span>
                ),
              },
              {
                key: "sub1",
                icon: (
                  <ShoppingOutlined
                    style={{ fontSize: 18, color: colorPalette.accent }}
                  />
                ),
                label: (
                  <span style={{ color: colorPalette.textLight }}>Ventas</span>
                ),
                children: [
                  {
                    key: "2",
                    label: (
                      <span style={{ color: colorPalette.textLight }}>
                        Nuevas Ventas
                      </span>
                    ),
                  },
                  {
                    key: "3",
                    label: (
                      <span style={{ color: colorPalette.textLight }}>
                        Historial
                      </span>
                    ),
                  },
                ],
              },
              {
                key: "sub2",
                icon: (
                  <EditOutlined
                    style={{ fontSize: 18, color: colorPalette.accent }}
                  />
                ),
                label: (
                  <span style={{ color: colorPalette.textLight }}>
                    Inventario
                  </span>
                ),
                children: [
                  {
                    key: "4",
                    label: (
                      <span style={{ color: colorPalette.textLight }}>
                        Motocicletas
                      </span>
                    ),
                  },
                  {
                    key: "5",
                    label: (
                      <span style={{ color: colorPalette.textLight }}>
                        Accesorios
                      </span>
                    ),
                  },
                ],
              },
              {
                key: "sub3",
                icon: (
                  <FileTextOutlined
                    style={{ fontSize: 18, color: colorPalette.accent }}
                  />
                ),
                label: (
                  <span style={{ color: colorPalette.textLight }}>
                    Reportes
                  </span>
                ),
                children: [
                  {
                    key: "6",
                    label: (
                      <span style={{ color: colorPalette.textLight }}>
                        Ventas Mensuales
                      </span>
                    ),
                  },
                  {
                    key: "7",
                    label: (
                      <span style={{ color: colorPalette.textLight }}>
                        Financieros
                      </span>
                    ),
                  },
                ],
              },
            ]}
          />
        </Sider>

        {/* Layout principal */}
        <Layout
          style={{
            marginLeft: collapsed ? 80 : 250,
            height: "100vh",
            width: "100%",
            transition: "margin-left 0.3s cubic-bezier(0.2, 0, 0, 1)",
            background: colorPalette.background,
          }}
        >
          {/* Header con efecto de vidrio */}
          <Header
            style={{
              padding: "0 24px",
              margin: 0,
              background: `rgba(255, 255, 255, 0.9)`,
              backdropFilter: "blur(8px)",
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              position: "fixed",
              top: 0,
              left: collapsed ? 80 : 250,
              right: 0,
              zIndex: 9,
              transition: "left 0.3s cubic-bezier(0.2, 0, 0, 1)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              borderBottom: `1px solid rgba(0,0,0,0.05)`,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "18px",
                width: 48,
                height: 48,
                color: colorPalette.primary,
              }}
            />

            <Dropdown
              menu={{ items: profileMenu }}
              dropdownRender={(menu) => (
                <div
                  style={{
                    background: "#fff",
                    borderRadius: 8,
                    boxShadow:
                      "0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",
                    minWidth: 240,
                  }}
                >
                  {React.cloneElement(menu as React.ReactElement, {
                    style: { boxShadow: "none" },
                  })}
                </div>
              )}
              trigger={["click"]}
              placement="bottomRight"
            >
              <HoverableSpace>
                <Badge dot color={colorPalette.notification}>
                  <Avatar
                    style={{
                      backgroundColor: colorPalette.primary,
                      verticalAlign: "middle",
                    }}
                    size="default"
                    icon={<UserOutlined />}
                  />
                </Badge>
                {!collapsed && (
                  <>
                    <span
                      style={{
                        color: colorPalette.textDark,
                        fontWeight: 500,
                        fontSize: 15,
                      }}
                    >
                      Carlos Moto
                    </span>
                    <DownOutlined
                      style={{
                        color: colorPalette.primary,
                        fontSize: 12,
                        transition: "transform 0.2s",
                      }}
                    />
                  </>
                )}
              </HoverableSpace>
            </Dropdown>
          </Header>

          {/* Contenido principal */}
          <Content
            style={{
              padding: 24,
              margin: 0,
              marginTop: 64,
              minHeight: "calc(100vh - 64px)",
              overflow: "auto",
              background: colorPalette.background,
            }}
          >
            <div
              style={{
                background: colorPalette.textLight,
                borderRadius: 12,
                padding: 24,
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                border: `1px solid rgba(0,0,0,0.05)`,
              }}
            >
              <h1
                style={{
                  color: colorPalette.primary,
                  marginBottom: 24,
                  fontWeight: 600,
                }}
              >
                Panel de Ventas de Motocicletas
              </h1>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                  gap: 16,
                  marginBottom: 24,
                }}
              >
                {[
                  { title: "Ventas Hoy", value: 8, icon: <ShoppingOutlined /> },
                  {
                    title: "Meta Mensual",
                    value: "75%",
                    icon: <DollarOutlined />,
                  },
                  {
                    title: "Nuevos Clientes",
                    value: 12,
                    icon: <UserOutlined />,
                  },
                  {
                    title: "Inventario",
                    value: 24,
                    icon: <EditOutlined />,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    style={{
                      background:
                        index % 2 === 0
                          ? `linear-gradient(135deg, ${colorPalette.primary} 0%, ${colorPalette.secondary} 100%)`
                          : `linear-gradient(135deg, ${colorPalette.secondary} 0%, ${colorPalette.primary} 100%)`,
                      color: colorPalette.textLight,
                      padding: 16,
                      borderRadius: 8,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: 120,
                      boxShadow: `0 4px 8px ${colorPalette.primary}20`,
                    }}
                  >
                    {React.cloneElement(item.icon, {
                      style: { fontSize: 24, marginBottom: 8 },
                    })}
                    <span style={{ fontSize: 16, fontWeight: 500 }}>
                      {item.title}
                    </span>
                    <span style={{ fontSize: 24, fontWeight: 600 }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  background: `linear-gradient(to right, ${colorPalette.background}, ${colorPalette.textLight})`,
                  padding: 16,
                  borderRadius: 8,
                  marginBottom: 24,
                  border: `1px solid ${colorPalette.primary}20`,
                }}
              >
                <h3
                  style={{
                    color: colorPalette.secondary,
                    marginBottom: 16,
                  }}
                >
                  Resumen de Ventas
                </h3>
                <p
                  style={{
                    color: colorPalette.textDark,
                    lineHeight: 1.6,
                  }}
                >
                  El sistema de gestión para ventas de motocicletas proporciona
                  herramientas completas para administrar inventario, clientes y
                  transacciones. Con este panel podrás monitorear el rendimiento
                  de tu concesionario en tiempo real.
                </p>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
