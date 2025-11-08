# Estrutura de Componentes

## Organização por Sistema

# Estrutura de Componentes

## Organização Atual

```
src/components/
├── shared/                    # Componentes globais
│   └── LandingPage.js         # Página inicial completa (landing page)
├── pao-da-stella-maris/           # Componentes do sistema de pão (futuro)
├── inventario/                 # Componentes do sistema de inventário (futuro)
└── guarda-memoria/             # Componentes do sistema de memórias (futuro)
```

## Decisão Arquitetural

A **LandingPage** foi implementada como um componente único e monolítico porque:

- ✅ **Não será reutilizada** em outras partes da aplicação
- ✅ **Simplicidade de manutenção** - tudo em um arquivo
- ✅ **Performance** - não há overhead de múltiplas importações
- ✅ **Clareza** - fácil de entender e modificar

## Convenções

- **shared/**: Componentes globais e páginas completas
- **[sistema]/**: Componentes específicos de cada subsistema (quando implementados)
- Imports: Usar caminhos absolutos com `@/components/...`

## Benefícios desta Organização

✅ **Separação clara** entre componentes globais e específicos
✅ **Manutenibilidade** - fácil encontrar componentes por sistema
✅ **Reutilização** - componentes shared podem ser usados em qualquer lugar
✅ **Escalabilidade** - fácil adicionar novos sistemas
✅ **Colaboração** - desenvolvedores sabem onde colocar novos componentes

## Convenções

- **shared/**: Componentes globais, layouts, utilitários
- **[sistema]/**: Componentes específicos de cada subsistema
- Nomes de arquivos: PascalCase (ex: `RecipeManager.js`)
- Imports: Usar caminhos absolutos com `@/components/...`
