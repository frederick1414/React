import React, { useState } from "react";
import "./index.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TeamOutlined,
  PieChartOutlined,
  DashboardOutlined,
  ShoppingOutlined,
  FileTextOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import CustomTable from "./components/antDesing/CustomTable";

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

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Cliente",
      dataIndex: "cliente",
      key: "cliente",
    },
    {
      title: "Moto",
      dataIndex: "moto",
      key: "moto",
    },
    {
      title: "Precio",
      dataIndex: "precio",
      key: "precio",
      render: (precio: number) => `$${precio.toLocaleString()}`,
    },
    {
      title: "Fecha",
      dataIndex: "fecha",
      key: "fecha",
    },
    {
      title: "Estado",
      dataIndex: "estado",
      key: "estado",
      render: (estado: string) => (
        <span style={{ color: estado === "Entregado" ? "#27ae60" : "#e67e22" }}>
          {estado}
        </span>
      ),
    },
  ];

  const data = [
    {
      key: 1,
      id: 1,
      cliente: "Juan Pérez",
      moto: "Honda CB190R",
      precio: 3200,
      fecha: "2025-05-20",
      estado: "Entregado",
    },
    {
      key: 2,
      id: 2,
      cliente: "Ana López",
      moto: "Yamaha FZ25",
      precio: 4100,
      fecha: "2025-05-21",
      estado: "Pendiente",
    },
    {
      key: 3,
      id: 3,
      cliente: "Carlos Ruiz",
      moto: "Suzuki Gixxer",
      precio: 2950,
      fecha: "2025-05-22",
      estado: "Entregado",
    },
    {
      key: 4,
      id: 4,
      cliente: "María Torres",
      moto: "Bajaj Pulsar NS200",
      precio: 2800,
      fecha: "2025-05-23",
      estado: "Pendiente",
    },
  ];
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
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            zIndex: 10,
            background: `#FFFFFF`, /// color menu,
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
              <span style={{ color: colorPalette.textDark }}>PROYECTO X</span>
            )}
          </div>

          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            items={[
              {
                key: "1",
                icon: <DashboardOutlined />,
                label: "Dashboard",
              },
              {
                key: "2",
                icon: (
                  <PieChartOutlined style={{ color: colorPalette.accent }} />
                ),
                label: "Estadísticas",
              },
              {
                key: "sub1",
                icon: (
                  <TeamOutlined style={{ color: colorPalette.secondary }} />
                ),
                label: "Clientes",
                children: [
                  {
                    key: "3",
                    label: "Lista de Clientes",
                  },
                  {
                    key: "4",
                    label: "Agregar Cliente",
                  },
                ],
              },
              {
                key: "sub2",
                icon: (
                  <ShoppingOutlined style={{ color: colorPalette.primary }} />
                ),
                label: "Ventas",
                children: [
                  {
                    key: "5",
                    label: "Lista de Ventas",
                  },
                  {
                    key: "6",
                    label: "Nueva Venta",
                  },
                ],
              },
              {
                key: "sub3",
                icon: (
                  <FileTextOutlined style={{ color: colorPalette.accent }} />
                ),
                label: "Reportes",
                children: [
                  {
                    key: "7",
                    label: "Reporte de Ventas",
                  },
                  {
                    key: "8",
                    label: "Reporte de Clientes",
                  },
                ],
              },
            ]}
          />
        </Sider>

        <Layout
          style={{
            marginLeft: collapsed ? 80 : 250,
            height: "100vh",
            width: "100%",
          }}
        >
          <Header
            style={{
              padding: "0 24px",
              margin: 0,
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
                color: colorPalette.textLight,
              }}
            />
          </Header>

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
            <CustomTable columns={columns} dataSource={data} />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
