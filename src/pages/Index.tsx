import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface Creator {
  id: number;
  name: string;
  username: string;
  avatar: string;
  cover: string;
  subscribers: number;
  posts: number;
  price: number;
  verified: boolean;
  category: string;
  description: string;
}

interface SubscriptionTier {
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
}

const Index = () => {
  const [selectedCreator, setSelectedCreator] = useState<Creator | null>(null);
  const [showSubscribeDialog, setShowSubscribeDialog] = useState(false);

  const creators: Creator[] = [
    {
      id: 1,
      name: 'Алиса Романова',
      username: '@alisa_r',
      avatar: 'https://cdn.poehali.dev/projects/8c18912c-6913-4afa-b1ca-65d3bdc9ea02/files/522fdf1d-a9a3-4a92-817c-838a27001462.jpg',
      cover: 'https://cdn.poehali.dev/projects/8c18912c-6913-4afa-b1ca-65d3bdc9ea02/files/522fdf1d-a9a3-4a92-817c-838a27001462.jpg',
      subscribers: 24500,
      posts: 342,
      price: 990,
      verified: true,
      category: 'Фитнес',
      description: 'Персональный тренер и нутрициолог. Эксклюзивные программы тренировок и планы питания.'
    },
    {
      id: 2,
      name: 'Максим Волков',
      username: '@max_volkov',
      avatar: 'https://cdn.poehali.dev/projects/8c18912c-6913-4afa-b1ca-65d3bdc9ea02/files/7a1c139a-d008-415f-83fa-df7183d9bd7e.jpg',
      cover: 'https://cdn.poehali.dev/projects/8c18912c-6913-4afa-b1ca-65d3bdc9ea02/files/7a1c139a-d008-415f-83fa-df7183d9bd7e.jpg',
      subscribers: 18200,
      posts: 256,
      price: 1490,
      verified: true,
      category: 'Бизнес',
      description: 'Предприниматель и инвестор. Делюсь опытом построения бизнеса с нуля.'
    },
    {
      id: 3,
      name: 'София Миллер',
      username: '@sofia_art',
      avatar: 'https://cdn.poehali.dev/projects/8c18912c-6913-4afa-b1ca-65d3bdc9ea02/files/908083c7-4194-45f4-84e3-248ebebcf5c7.jpg',
      cover: 'https://cdn.poehali.dev/projects/8c18912c-6913-4afa-b1ca-65d3bdc9ea02/files/908083c7-4194-45f4-84e3-248ebebcf5c7.jpg',
      subscribers: 32100,
      posts: 489,
      price: 790,
      verified: true,
      category: 'Искусство',
      description: 'Художник и дизайнер. Уроки рисования, таймлапсы процесса и закулисье творчества.'
    }
  ];

  const subscriptionTiers: SubscriptionTier[] = [
    {
      name: 'Базовый',
      price: 990,
      features: ['Доступ к базовому контенту', 'Лайки и комментарии', 'Уведомления о новых постах']
    },
    {
      name: 'Премиум',
      price: 1990,
      features: ['Весь базовый контент', 'Эксклюзивные посты', 'Личные сообщения', 'Ранний доступ к контенту'],
      popular: true
    },
    {
      name: 'VIP',
      price: 4990,
      features: ['Весь премиум контент', 'Видеозвонки 1-на-1', 'Персональный контент на заказ', 'Приоритетная поддержка']
    }
  ];

  const handleSubscribe = (creator: Creator) => {
    setSelectedCreator(creator);
    setShowSubscribeDialog(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
              <Icon name="Crown" size={20} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold gradient-text">FanSpace</h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              <Icon name="Home" size={18} className="mr-2" />
              Главная
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              <Icon name="TrendingUp" size={18} className="mr-2" />
              Трендовое
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              <Icon name="Bookmark" size={18} className="mr-2" />
              Подписки
            </Button>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Icon name="Search" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Bell" size={20} />
            </Button>
            <Avatar className="w-9 h-9 cursor-pointer">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
              <AvatarFallback>ВЫ</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 animate-fade-in">
          <div className="relative rounded-3xl overflow-hidden gradient-primary p-12 text-center">
            <div className="relative z-10">
              <h2 className="text-5xl font-bold text-white mb-4">
                Поддержите любимых авторов
              </h2>
              <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
                Получайте эксклюзивный контент от креаторов и будьте ближе к своим кумирам
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                <Icon name="Sparkles" size={20} className="mr-2" />
                Стать автором
              </Button>
            </div>
          </div>
        </section>

        <Tabs defaultValue="trending" className="mb-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="trending">
              <Icon name="TrendingUp" size={16} className="mr-2" />
              Трендовое
            </TabsTrigger>
            <TabsTrigger value="new">
              <Icon name="Sparkles" size={16} className="mr-2" />
              Новое
            </TabsTrigger>
            <TabsTrigger value="top">
              <Icon name="Crown" size={16} className="mr-2" />
              Топ
            </TabsTrigger>
          </TabsList>

          <TabsContent value="trending" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {creators.map((creator, index) => (
                <Card
                  key={creator.id}
                  className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 animate-scale-in cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => handleSubscribe(creator)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={creator.cover}
                      alt={creator.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge className="absolute top-3 right-3 bg-primary/90 text-white border-0">
                      <Icon name="Star" size={12} className="mr-1" />
                      {creator.category}
                    </Badge>
                  </div>

                  <div className="p-5">
                    <div className="flex items-start gap-3 mb-4">
                      <Avatar className="w-14 h-14 border-2 border-primary">
                        <AvatarImage src={creator.avatar} />
                        <AvatarFallback>{creator.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-1 mb-1">
                          <h3 className="font-semibold text-lg">{creator.name}</h3>
                          {creator.verified && (
                            <Icon name="BadgeCheck" size={16} className="text-primary" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{creator.username}</p>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {creator.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Icon name="Users" size={14} />
                        <span>{(creator.subscribers / 1000).toFixed(1)}K</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Image" size={14} />
                        <span>{creator.posts} постов</span>
                      </div>
                    </div>

                    <Button className="w-full gradient-primary text-white hover:opacity-90 font-semibold">
                      <Icon name="Lock" size={16} className="mr-2" />
                      Подписаться за {creator.price}₽/мес
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="new">
            <div className="text-center py-12 text-muted-foreground">
              <Icon name="Sparkles" size={48} className="mx-auto mb-4 opacity-50" />
              <p>Новые авторы появятся здесь</p>
            </div>
          </TabsContent>

          <TabsContent value="top">
            <div className="text-center py-12 text-muted-foreground">
              <Icon name="Crown" size={48} className="mx-auto mb-4 opacity-50" />
              <p>Топ авторов появится здесь</p>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Dialog open={showSubscribeDialog} onOpenChange={setShowSubscribeDialog}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedCreator && (
            <>
              <DialogHeader>
                <div className="relative h-32 -mt-6 -mx-6 mb-6 overflow-hidden">
                  <img
                    src={selectedCreator.cover}
                    alt={selectedCreator.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-20 h-20 border-4 border-primary">
                    <AvatarImage src={selectedCreator.avatar} />
                    <AvatarFallback>{selectedCreator.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <DialogTitle className="text-2xl">{selectedCreator.name}</DialogTitle>
                      {selectedCreator.verified && (
                        <Icon name="BadgeCheck" size={20} className="text-primary" />
                      )}
                    </div>
                    <DialogDescription className="text-base">
                      {selectedCreator.username}
                    </DialogDescription>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">{selectedCreator.description}</p>

                <div className="flex gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">
                      {(selectedCreator.subscribers / 1000).toFixed(1)}K
                    </div>
                    <div className="text-sm text-muted-foreground">Подписчиков</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">{selectedCreator.posts}</div>
                    <div className="text-sm text-muted-foreground">Постов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">4.9</div>
                    <div className="text-sm text-muted-foreground">Рейтинг</div>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Выберите уровень подписки</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {subscriptionTiers.map((tier) => (
                    <Card
                      key={tier.name}
                      className={`p-6 relative ${
                        tier.popular
                          ? 'border-2 border-primary gradient-card'
                          : 'border-border'
                      }`}
                    >
                      {tier.popular && (
                        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white">
                          Популярный
                        </Badge>
                      )}
                      <h4 className="font-semibold text-lg mb-2">{tier.name}</h4>
                      <div className="mb-4">
                        <span className="text-3xl font-bold gradient-text">{tier.price}₽</span>
                        <span className="text-muted-foreground">/месяц</span>
                      </div>
                      <ul className="space-y-2 mb-6">
                        {tier.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        className={`w-full ${
                          tier.popular ? 'gradient-primary text-white' : ''
                        }`}
                        variant={tier.popular ? 'default' : 'outline'}
                      >
                        Подписаться
                      </Button>
                    </Card>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
