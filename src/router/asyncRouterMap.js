import _import from '@/utils/import'

const Layout = _import('layout/Layout')

export const asyncRouterMap = [
    // 个人中心
    {
        path: '/profile',
        component: Layout,
        hidden: true,
        children: [
            {
                path: 'index',
                component: _import('profile/index'),
                name: 'profile',
                meta: {
                    title: 'profile',
                    icon: 'test'
                }
            }
        ]
    },
    // 项目管理
    {
        path: '/project',
        redirect: 'project/list',
        component: Layout,
        name: 'ProjectManager',
        meta: {
            title: 'ProjectManager',
            icon: 'widgets'
        },
        children: [
            {
                path: 'list',
                component: _import('project/List'),
                name: 'ProjectList',
                meta: {
                    title: 'ProjectList',
                    icon: 'widgets'
                }
            },
            {
                path: 'detail',
                hidden: true,
                component: _import('project/Detail'),
                name: 'ProjectDetail',
                meta: {
                    title: 'ProjectDetail',
                    icon: 'widgets'
                }
            },
            {
                path: 'project-change',
                hidden: true,
                component: _import('project/ProjectChange'),
                name: 'ProjectChange',
                meta: {
                    title: 'ProjectChange',
                    icon: 'widgets'
                }
            }
        ]
    }
    ,
    // 公告通知管理
    {
        path: '/notify',
        component: Layout,
        name: 'NotifyManager',
        meta: {
            title: 'NotifyManager',
            icon: 'widgets'
        },
        children: [
            {
                path: 'list',
                component: _import('notify/List'),
                name: 'NotifyList',
                meta: {
                    title: 'NotifyList',
                    icon: 'widgets'
                }
            },{
                path: 'create',
                component: _import('notify/Create'),
                name: 'CreateNotify',
                hidden:true,
                meta: {
                    title: 'CreateNotify',
                    icon: 'widgets'
                }
            },{
                path: 'detail',
                component: _import('notify/Detail'),
                name: 'NotifyDetail',
                hidden:true,
                meta: {
                    title: 'NotifyDetail',
                    icon: 'widgets'
                }
            }
        ]
    },
    // 批文申请
    {
        path: '/apply',
        component: Layout,
        name: 'ApplyManager',
        meta: {
            title: 'ApplyManager',
            icon: 'widgets'
        },
        children: [
            {
                path: 'list',
                component: _import('apply/List'),
                name: 'ApplyList',
                meta: {
                    title: 'ApplyList',
                    icon: 'widgets'
                }
            },{
                path: 'create',
                component: _import('apply/Create'),
                name: 'CreateApply',
                hidden:true,
                meta: {
                    title: 'CreateApply',
                    icon: 'widgets'
                }
            }
        ]
    },
    // 审批流程
    {
        path: '/approval',
        component: Layout,
        name: 'ApprovalManager',
        meta: {
            title: 'ApprovalManager',
            icon: 'widgets'
        },
        children: [
            {
                path: 'list',
                component: _import('approval/List'),
                name: 'ApprovalList',
                meta: {
                    title: 'ApprovalList',
                    icon: 'widgets'
                }
            },
            {
                path: 'create',
                component: _import('approval/Create'),
                name: 'CreateApproval',
                hidden:true,
                meta: {
                    title: 'CreateApproval',
                    icon: 'widgets'
                }
            },{
                path: 'detail',
                component: _import('approval/Detail'),
                name: 'ApprovalDetail',
                hidden:true,
                meta: {
                    title: 'ApprovalDetail',
                    icon: 'widgets'
                }
            }
        ]
    },
    // 部门管理
    {
        path: '/department',
        component: Layout,
        name: 'DepartmentManager',
        meta: {
            title: 'DepartmentManager',
            icon: 'widgets'
        },
        children: [
            {
                path: 'list',
                component: _import('department/List'),
                name: 'DepartmentList',
                meta: {
                    title: 'DepartmentList',
                    icon: 'widgets'
                }
            },
            // {
            //     path: 'create',
            //     component: _import('department/Create'),
            //     name: 'CreateDepartment',
            //     meta: {
            //         title: 'CreateDepartment',
            //         icon: 'widgets'
            //     }
            // }
        ]
    },
    // 车辆管理
    {
        path: '/car',
        component: Layout,
        name: 'CarManager',
        meta: {
            title: 'CarManager',
            icon: 'widgets'
        },
        children: [
            {
                path: 'all-list',
                component: _import('car/AllList'),
                name: 'CarAllList',
                meta: {
                    title: 'CarAllList',
                    icon: 'widgets'
                }
            },
            {
                path: 'create',
                component: _import('car/Create'),
                name: 'CreateCar',
                meta: {
                    title: 'CreateCar',
                    icon: 'widgets'
                }
            }
        ]
    },
    // 文章
    {
        path: '/article',
        component: Layout,
        meta: {
            title: 'ArticleManager',
            icon: 'widgets'
        },
        children: [
            {
                path: 'list',
                component: _import('article/List'),
                name: 'ArticleList',
                meta: {
                    title: 'ArticleList',
                    icon: 'widgets'
                }
            },
            {
                path: 'create',
                component: _import('article/Create'),
                name: 'CreateArticle',
                meta: {
                    title: 'CreateArticle',
                    icon: 'widgets'
                }
            }
        ]
    },
    // 订单
    {
        path: '/order',
        component: Layout,
        meta: {
            title: 'OrderManager',
            icon: 'widgets'
        },
        children: [
            {
                path: 'list',
                component: _import('order/List'),
                name: 'OrderList',
                meta: {
                    title: 'OrderList',
                    icon: 'widgets'
                }
            },
            {
                path: 'create',
                component: _import('order/Create'),
                name: 'CreateOrder',
                meta: {
                    title: 'CreateOrder',
                    icon: 'widgets'
                }
            }
        ]
    },
    // 财务
    {
        path: '/finance',
        component: Layout,
        meta: {
            title: 'FinanceManager',
            icon: 'widgets'
        },
        children: [
            {
                path: 'list',
                component: _import('finance/List'),
                name: 'FinanceList',
                meta: {
                    title: 'FinanceList',
                    icon: 'widgets'
                }
            },
            {
                path: 'income',
                component: _import('finance/Income'),
                name: 'CreateIncome',
                meta: {
                    title: 'CreateIncome',
                    icon: 'widgets'
                }
            },
            {
                path: 'payout',
                component: _import('finance/Payout'),
                name: 'CreatePayout',
                meta: {
                    title: 'CreatePayout',
                    icon: 'widgets'
                }
            }
        ]
    },
    // 设置
    {
        path: '/setting',
        component: Layout,
        meta: {
            title: 'SystemSetting',
            icon: 'widgets'
        },
        children: [
            {
                path: 'company',
                component: _import('setting/Company'),
                name: 'CompanySetting',
                meta: {
                    title: 'CompanySetting',
                    icon: 'widgets'
                }
            }
        ]
    },
    // 权限页面 只有 admin 用户才可访问
    {
        path: '/permission',
        component: Layout,
        redirect: '/permission/index',
        meta: {
            roles: ['admin']
        },
        children: [
            {
                path: 'index',
                component: _import('permission/index'),
                name: 'permission',
                meta: {
                    title: 'permission',
                    icon: 'test',
                    roles: ['admin']
                }
            }
        ]
    },
    {path: '*', redirect: '/404', hidden: true}
]
