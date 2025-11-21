import { Routes } from '@angular/router';

export const heuristicaRoutes: Routes = [
    // Rutas con nombres descriptivos (recomendado)
    {
        path: 'visibilidad-estado-sistema',
        loadComponent: () => import('./h1-page/estado-sistema/estado-sistema').then(m => m.EstadoSistema)
    },
    {
        path: 'correspondencia-mundo-real',
        loadComponent: () => import('./h2-page/mundoRealMalo/mundoRealMalo').then(m => m.MundoRealMalo) 
    },
    {
        path: 'control-libertad-usuario',
        loadComponent: () => import('./h3-page/controlLibertadMalo/controlLibertadMalo').then(m => m.ControlLibertadMalo) 
    },
    {
        path: 'consistencia-estandares',
        loadComponent: () => import('./h4-page/consistenciaMalo/consistenciaMalo').then(m => m.ConsistenciaMalo) 
    },
    {
        path: 'prevencion-errores',
        loadComponent: () => import('./h5-page/prevencionMalo/prevencionMalo').then(m => m.PrevencionMalo) 
    },
    {
        path: 'reconocimiento-recordar',
        loadComponent: () => import('./h6-page/reconocimientoMalo/reconocimientoMalo').then(m => m.ReconocimientoMalo) 
    },
    {
        path: 'flexibilidad-eficiencia',
        loadComponent: () => import('./h1-page/estado-sistema/estado-sistema').then(m => m.EstadoSistema) // Temporal, cambiar por H7Page cuando esté listo
    },
    {
        path: 'diseno-estetico-minimalista',
        loadComponent: () => import('./h1-page/estado-sistema/estado-sistema').then(m => m.EstadoSistema) // Temporal, cambiar por H8Page cuando esté listo
    },
    {
        path: 'ayuda-reconocer-errores',
        loadComponent: () => import('./h1-page/estado-sistema/estado-sistema').then(m => m.EstadoSistema) // Temporal, cambiar por H9Page cuando esté listo
    },
    {
        path: 'ayuda-documentacion',
        loadComponent: () => import('./h1-page/estado-sistema/estado-sistema').then(m => m.EstadoSistema) // Temporal, cambiar por H10Page cuando esté listo
    },

    // También mantenemos las rutas con números para compatibilidad
    {
        path: '1',
        redirectTo: 'visibilidad-estado-sistema'
    },
    {
        path: '2',
        redirectTo: 'correspondencia-mundo-real'
    },
    {
        path: '3',
        redirectTo: 'control-libertad-usuario'
    },
    {
        path: '4',
        redirectTo: 'consistencia-estandares'
    },
    {
        path: '5',
        redirectTo: 'prevencion-errores'
    },
    {
        path: '6',
        redirectTo: 'reconocimiento-recordar'
    },
    {
        path: '7',
        redirectTo: 'flexibilidad-eficiencia'
    },
    {
        path: '8',
        redirectTo: 'diseno-estetico-minimalista'
    },
    {
        path: '9',
        redirectTo: 'ayuda-reconocer-errores'
    },
    {
        path: '10',
        redirectTo: 'ayuda-documentacion'
    },

    // Ruta por defecto
    {
        path: '',
        redirectTo: 'visibilidad-estado-sistema',
        pathMatch: 'full'
    },

    // Ruta wildcard para rutas no encontradas
    {
        path: '**',
        redirectTo: 'visibilidad-estado-sistema'
    }
];