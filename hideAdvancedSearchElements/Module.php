<?php
namespace hideAdvancedSearchElements;
use Omeka\Module\AbstractModule;
use Zend\EventManager\Event;
use Zend\EventManager\SharedEventManagerInterface;


class Module extends AbstractModule
{
   
    public function attachListeners(SharedEventManagerInterface $sharedEventManager)
    {

        $sharedEventManager->attach(
            'Omeka\Controller\Admin\Item',
            'view.advanced_search',
            array($this, 'advancedSearch')
        );
        
    }

    public function advancedSearch(Event $event) {
        $view = $event->getTarget();
        $view->headScript()->appendFile($view->assetUrl('advanced-search.js', 'hideAdvancedSearchElements'));
    }


}
